/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import { getFirestore } from "firebase-admin/firestore";
const db = getFirestore();
import cors from "cors";
import { onRequest } from "firebase-functions/v2/https";
import { nanoid } from "nanoid";
import logger from "firebase-functions/logger";
import {
  checkPromos,
  groupBy as kodanshaGroupBy,
  buildKodanshaMail,
} from "./lib/kodansha.js";
import { saveExecution, sendMail, filterPromosByNew } from "./helpers/index.js";
import { parseURL } from "./lib/bookmarks.js";
import { registerSuccessfulTask } from "./lib/metrics.js";
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

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
    const groupedByName = kodanshaGroupBy(responsePromos);
    // const mailData = buildKodanshaMail(groupedByName);

    const path = "scrapper/kodansha/history";
    // check if the promo already exists
    newPromos = groupedByName; //await filterPromosByNew(groupedByName);
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
      // Extraer URL del cuerpo de la solicitud
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
      };
      await executionRef.set(result);

      // Responder con éxito
      return response.status(200).json(result);
    } catch (error) {
      console.error("Error saving bookmark:", error);
      return response.status(500).send("Internal Server Error");
    }
  });
});

export { checkKodansha, saveBookmark };
