/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import { getFirestore } from "firebase-admin/firestore";
import cors from "cors";
import { onRequest } from "firebase-functions/v2/https";
import logger from "firebase-functions/logger";
import { checkPromos, groupBy as kodanshaGroupBy } from "./lib/kodansha.js";
import {
  buildMetrics,
  getKodanshaPromos,
  getLastElementsFromDB,
  saveExecution,
  saveKodanshaExecution,
} from "./helpers/index.js";
import { parseURL } from "./lib/bookmarks.js";
import {
  getCollections,
  getSafeWallpaper,
  getWallpaperFromQueue,
  saveWallpaperHistory,
} from "./lib/wallpaper.js";
import { logActivityInDB } from "./lib/activities.js";
import { checkAnimeCornerScraper } from "./lib/animeCorner.js";
import {
  cleanCache,
  normalizeFeed,
  sanitizeGUID,
  saveFeedToFirestore,
} from "./lib/rssFeed.js";
import Parser from "rss-parser";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { PromisePool } from "@supercharge/promise-pool";
import { nanoid } from "nanoid";
import humbleBundle from "./lib/humble/index.js";

const db = getFirestore();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const ERRORS = {
  METHOD_NOT_ALLOWED: "Method not allowed",
  INVALID_PARAMETERS: "Invalid 'collection' or 'page' parameter",
  INTERNAL_ERROR: "Internal Server Error",
};

const corsMiddleware = cors({
  origin: "*",
  // origin: [
  //   "https://bifr-os.vercel.app",
  //   "https://bifros.luisluis.dev",
  //   "http://localhost",
  //   "chrome-extension://ofcjfdmpkmfdafdmloddoiilmfhpmeoo",
  //   "anywhere",
  // ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204, // Evita errores en algunos navegadores
});

function compareArrays(arr1, arr2) {
  // Usar un Set para evitar duplicados en las diferencias
  const differences = new Set();

  // Agregar elementos que están en arr1 pero no en arr2
  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      differences.add(item);
    }
  });

  // Agregar elementos que están en arr2 pero no en arr1
  arr2.forEach((item) => {
    if (!arr1.includes(item)) {
      differences.add(item);
    }
  });

  // Convertir el Set en un array y retornarlo
  return Array.from(differences);
}

const checkKodansha = onRequest(async (request, response) => {
  const startTime = Date.now();
  let status = "success";

  try {
    const [responsePromos, elementsInDB] = await Promise.all([
      checkPromos(),
      getKodanshaPromos(),
    ]);

    // kodanshaGroupBy(responsePromos); //await filterPromosByNew(groupedByName);
    const dbIDs = new Set(elementsInDB.ids);
    const newPromosIDs = new Set(responsePromos.ids);
    const newIDs = newPromosIDs.difference(dbIDs);
    const idToDel = dbIDs.difference(newPromosIDs);
    if (newIDs.size > 0) {
      const metrics = buildMetrics({
        startTime,
        status,
        errorMessage: null,
        url: "https://kodansha.us/",
        urlsScraped: "https://kodansha.us/browse",
        length: newIDs.size,
      });

      // sendMail(mailData);

      await saveKodanshaExecution(responsePromos.data, newIDs, idToDel);
    }
    await logActivityInDB({
      type: "scraper",
      description: `New Kodansha promos found (${newIDs.size})`,
      timestamp: new Date().toISOString(),
      metadata: { count: newIDs.size },
    });
    response.status(200).send({
      newIDs: Array.from(newIDs),
      dbIDs: Array.from(dbIDs),
    });
  } catch (err) {
    logger.error("Error in checkKodansha", err);
  }
});
const checkHumbleBundle = onRequest(async (request, response) => {
  try {
    const result = await humbleBundle();
    return response.status(200).json(result);
  } catch (error) {
    return response.status(500).send("Internal Server Error");
  }
});

const saveBookmark = onRequest(async (request, response) => {
  corsMiddleware(request, response, async () => {
    // Validación del método
    if (request.method !== "POST") {
      return response.status(405).send("Method not allowed");
    }

    try {
      // Extraer URL del url de la solicitud
      const { url, id } = request.body;
      if (!url) {
        return response.status(400).send("Missing 'url' in request body");
      }

      // Procesar la URL y generar datos
      const ogData = await parseURL(url);
      const bookmarkID = id ?? `bookmark-${nanoid()}`;

      // Referencia al documento en Firestore
      const executionRef = db
        .collection("bookmarker")
        .doc("myData")
        .collection("bookmarks")
        .doc(bookmarkID);

      // Guardar en Firestore
      const result = {
        id: bookmarkID,
        ...ogData,
        isFavorite: false,
      };
      await executionRef.set(result);
      logActivityInDB({
        type: "bookmarker",
        description: `Bookmark saved: ${url}`,
        timestamp: new Date().toISOString(),
        metadata: { url },
      });
      // Responder con éxito
      return response.status(200).json(result);
    } catch (error) {
      console.error("Error saving bookmark:", error);
      return response.status(500).send("Internal Server Error");
    }
  });
});

const getCollectionPage = onRequest(async (request, response) => {
  corsMiddleware(request, response, async () => {
    // Validación del método
    if (request.method !== "GET") {
      return response.status(405).send(ERRORS.METHOD_NOT_ALLOWED);
    }

    try {
      // Extraer URL del cuerpo de la solicitud
      const { collection, page } = request.query;
      if (!collection || !page || isNaN(Number(page)) || Number(page) <= 0) {
        return response.status(400).send(ERRORS.INVALID_PARAMETERS);
      }
      const result = await getCollections(collection, Number(page));

      if (!result) {
        return response.status(404).send("Collection not found or unavailable");
      }
      // Responder con éxito
      return response.status(200).json(result);
    } catch (error) {
      console.error("Error saving bookmark:", error);
      logActivityInDB({
        type: "wallpaper",
        description: `Error getting collection ${collection} page ${page}`,
        timestamp: new Date().toISOString(),
        metadata: { error },
      });
      return response.status(500).send(ERRORS.INTERNAL_ERROR);
    }
  });
});

const getWallpaper = onRequest(async (request, response) => {
  corsMiddleware(request, response, async () => {
    // Validación del método
    if (request.method !== "GET") {
      return response.status(405).send("Method not allowed");
    }

    try {
      // Extraer URL del cuerpo de la solicitud
      const { type, keep_in_queue } = request.query;

      if (!type) {
        return response.status(400).send("Missing 'type' in request body");
      }
      if (type === "ss") {
        const result = await getSafeWallpaper();
        void logActivityInDB({
          type: "wallpaper",
          description: `Safe Wallpaper served: ${result.short_url}`,
          timestamp: new Date().toISOString(),
          metadata: { result },
        });
        return response.status(200).json(result);
      }
      const result = await getWallpaperFromQueue(type, keep_in_queue);

      !keep_in_queue &&
        (await Promise.all([
          saveWallpaperHistory(result),
          logActivityInDB({
            type: "wallpaper",
            description: `Wallpaper served: ${result.whPath}`,
            timestamp: new Date().toISOString(),
            metadata: { result },
          }),
        ]));

      if ("whPath" in result) {
        return response.status(200).json({
          ...result,
          path: result.url,
        });
      }

      return response.status(200).json({
        ...result,
      });
    } catch (error) {
      console.error("Error getting wallpaper:", error);
      void logActivityInDB({
        type: "wallpaper",
        description: `Error getting wallpaper`,
        timestamp: new Date().toISOString(),
      });

      return response.status(500).send("Internal Server Error");
    }
  });
});

const animeCorner = onRequest(async (request, response) => {
  // Validación del método
  if (request.method !== "GET") {
    return response.status(405).send("Method not allowed");
  }
  const startTime = Date.now();

  const lastElements = await getLastElementsFromDB(
    "https://animecorner.me/category/anime-corner/rankings/anime-of-the-week/",
    10,
  );
  const results = await checkAnimeCornerScraper(lastElements);
  const promises = results.map(async (result) => {
    const metrics = buildMetrics({
      startTime,
      status: "success",
      errorMessage: null,
      url: "https://animecorner.me/category/anime-corner/rankings/anime-of-the-week/",
      urlsScraped: result.link,
      length: result.data.length,
    });
    await saveExecution({ result: result, metrics });
  });
  const logActivity = logActivityInDB({
    type: "scraper",
    description: `New rankings found (${results.length})`,
    timestamp: new Date().toISOString(),
    metadata: { count: results.length },
  });

  await Promise.all([...promises, logActivity]);

  try {
    return response.status(200).json(results);
  } catch (error) {
    return response.status(500).send("Internal Server Error");
  }
});

const readFeedsHook = onRequest(async (request, response) => {
  let parser = new Parser();
  // Validación del método
  if (request.method !== "GET") {
    return response.status(405).send("Method not allowed");
  }
  try {
    const startTime = Date.now();

    const feedsUrl = [
      {
        url: "https://www.animenewsnetwork.com/news/rss.xml?ann-edition=w",
        category: "anime",
      },
      { url: "https://myanimelist.net/rss/news.xml", category: "anime" },
      { url: "https://animecorner.me/feed/", category: "anime" },
      { url: "https://www.livechart.me/feeds/headlines", category: "anime" },
      {
        url: "https://www.animenewsnetwork.com/all-reviews/rss.xml?ann-edition=w",
        category: "anime",
      },
      { url: "https://www.smashingmagazine.com/feed/", category: "tech" },
      { url: "https://medium.com/feed/airbnb-engineering", category: "tech" },
      { url: "https://stackoverflow.blog/feed/", category: "tech" },
      { url: "https://netflixtechblog.com/feed", category: "tech" },
      {
        url: "https://www.animenewsnetwork.com/feature/rss.xml?ann-edition=w",
        category: "anime",
      },
      { url: "https://dev.to/feed", category: "dev.to" },
    ];

    const collectionRef = db.collection("rssFeeds/cache/items");

    const { results: feeds, errors: parseErrors } =
      await PromisePool.withConcurrency(5)
        .for(feedsUrl)
        .process(async (url) => {
          const feed = await parser.parseURL(url.url);
          if (url.category === "reddit") {
            console.log("reddit feed", feed.items.length);
          }
          return { ...feed, category: url.category };
        });
    if (parseErrors.length > 0) {
      logger.error("Error in readFeedsHook", parseErrors);
    }

    const items = feeds
      .map((feed) =>
        feed.items.map((item) => ({ ...item, category: feed.category })),
      )
      .flat();
    const { results: normalizedFeeds, errors } =
      await PromisePool.withConcurrency(10)
        .for(items)
        .process(async (item) => {
          const existingDoc = await collectionRef
            .doc(sanitizeGUID(item.guid))
            .get();
          if (!existingDoc.exists) {
            return await normalizeFeed(item);
          }
          return null;
        });
    if (errors.length > 0) {
      logger.error("Error in readFeedsHook", errors);
    }

    const flatFeeds = normalizedFeeds.filter((feed) => feed !== null);
    if (flatFeeds.length > 0) {
      await saveFeedToFirestore(flatFeeds);
    }
    const stopTimeSave = Date.now();

    void logActivityInDB({
      type: "feed",
      description: `New feeds cached ${flatFeeds.length} total time ${stopTimeSave - startTime} `,
      timestamp: new Date().toISOString(),
      metadata: { count: flatFeeds.length },
    });

    return response
      .status(200)
      .send(`ok ${stopTimeSave - startTime}ms ${flatFeeds.length}`);
  } catch (error) {
    console.error("Error reading feeds", error);
    logger.error("Error in readFeedsHook", error);
    return response.status(500).send("Internal Server Error");
  }
});
const cleanExpiredCacheWeb = onRequest(async (request, response) => {
  try {
    const result = await cleanCache();
    return response.status(200).send(result);
  } catch (error) {
    return response.status(500).send("Internal Server Error");
  }
});

const cleanExpiredCache = onSchedule("every 12 hours", async (event) => {
  await cleanCache();
});

export {
  checkHumbleBundle,
  checkKodansha,
  saveBookmark,
  getCollectionPage,
  getWallpaper,
  animeCorner,
  readFeedsHook,
  cleanExpiredCache,
  cleanExpiredCacheWeb,
};
