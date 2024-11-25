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
import { saveExecution } from "./helpers/index.js";
import { parseURL } from "./lib/bookmarks.js";
import {
  getCollections,
  getSafeWallpaper,
  getWallpaperFromQueue,
} from "./lib/wallpaper.js";
import { logActivityInDB } from "./lib/activities.js";

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
  origin: ["https://bifr-os.vercel.app", "http://localhost"], // Cambia a "*" para permitir cualquier origen
  methods: ["POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

const checkKodansha = onRequest(async (request, response) => {
  const startTime = Date.now();
  let status = "success";
  let newPromos = [];
  let data = {};

  try {
    const responsePromos = await checkPromos();
    // const mailData = buildKodanshaMail(groupedByName);

    // check if the promo already exists
    newPromos = kodanshaGroupBy(responsePromos); //await filterPromosByNew(groupedByName);
    const keys = Object.keys(newPromos);
    if (keys.length > 0) {
      const endTime = Date.now();
      const metrics = {
        timestamp: new Date(startTime).toISOString(),
        duration: endTime - startTime,
        status,
        errorMessage: null,
        urlsScraped: "https://kodansha.us/",
        dataExtracted: Object.keys(newPromos).length,
      };

      data = await saveExecution({ result: newPromos, metrics });
      // sendMail(mailData);
      logActivityInDB({
        type: "scraper",
        description: `New Kodansha promos found (${keys.length})`,
        timestamp: new Date().toISOString(),
        metadata: { count: keys.length },
      });

      logger.info("New Kodansha promos found", newPromos.length);
    } else {
      logger.info("No new Kodansha promos found");
    }
  } catch (err) {
    logger.error("Error in checkKodansha", err);
    status = "error";
  } finally {
    if (status === "error") {
      response.status(500).send("Error in checkKodansha");
    } else {
      response.status(200).send(data);
    }
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
      const { url } = request.body;
      if (!url) {
        return response.status(400).send("Missing 'url' in request body");
      }

      // Procesar la URL y generar datos
      const ogData = await parseURL(url);
      const bookmarkID = `bookmark-${Date.now()}`;

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
      const { type } = request.query;

      if (!type) {
        return response.status(400).send("Missing 'type' in request body");
      }
      if (type === "ss") {
        const result = await getSafeWallpaper();
        logActivityInDB({
          type: "wallpaper",
          description: `Safe Wallpaper served: ${result.short_url}`,
          timestamp: new Date().toISOString(),
          metadata: { result },
        });
        return response.status(200).json(result);
      }
      const result = await getWallpaperFromQueue(type);
      logActivityInDB({
        type: "wallpaper",
        description: `Wallpaper served: ${result.whPath}`,
        timestamp: new Date().toISOString(),
        metadata: { result },
      });
      // Responder con éxito
      return response.status(200).json(result);
    } catch (error) {
      logActivityInDB({
        type: "wallpaper",
        description: `Error getting wallpaper: ${error}`,
        timestamp: new Date().toISOString(),
      });

      return response.status(500).send("Internal Server Error");
    }
  });
});

export { checkKodansha, saveBookmark, getCollectionPage, getWallpaper };
