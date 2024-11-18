/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import { nanoid } from "nanoid";
import logger from "firebase-functions/logger";
import {
  checkPromos,
  groupBy as kodanshaGroupBy,
  buildKodanshaMail,
} from "./lib/kodansha.js";
import { saveExecution, sendMail, filterPromosByNew } from "./helpers/index.js";
import { registerSuccessfulTask } from "./lib/metrics.js";
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

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

export { checkKodansha };
