import sgMail from "@sendgrid/mail";
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";
import { nanoid } from "nanoid";
initializeApp();
const db = getFirestore();
const { year, month, day } = destructuredDate();

function destructuredDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return { year, month, day };
}

const filterPromosByNew = async (promos, path = "") => {
  const { year, month } = destructuredDate();
  let promosRef;
  if (path !== "" && refs[path]) {
    promosRef = refs[path];
  }
  const promosSnapshot = await promosRef.get();
  const promosIds = promosSnapshot.docs.map((doc) => doc.data().link);
  return promos.filter((promo) => !promosIds.includes(promo.link));
};

export const buildMetrics = ({
  startTime,
  status,
  errorMessage,
  url,
  urlsScraped,
  length,
}) => {
  const endTime = Date.now();
  return {
    timestamp: new Date(startTime).toISOString(),
    duration: endTime - startTime,
    status,
    errorMessage,
    url,
    urlsScraped,
    dataExtracted: length,
  };
};

const saveExecution = async (newData) => {
  const executionId = `execution-${nanoid()}`;
  const executionRef = db.collection("scraper").doc(executionId);
  try {
    const data = {
      ...newData,
      metrics: {
        ...newData.metrics,
        executionId,
      },
      executionId: executionId,
      timestamp: new Date().toISOString(),
    };
    await executionRef.set(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function sendMail({ text, html, subject }) {
  // eslint-disable-next-line no-undef
  const apiKey = process.env.SENDGRID_API_KEY;

  sgMail.setApiKey(apiKey);
  const msg = {
    to: "luis.jsdev@proton.me",
    from: "contacto@luisforge.com", // Change to your verified sender
    subject: `Nuevas Promos ${subject}`,
    text,
    html,
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
}

export const getLastElementsFromDB = async (url, limit = 10) => {
  const ref = db.collection("scraper");
  const queryRef = ref
    .where("metrics.url", "==", url)
    .orderBy("timestamp")
    .limit(limit);
  const snapshot = await queryRef.get();
  if (snapshot.empty) {
    return [];
  }
  const results = [];
  snapshot.forEach((doc) => {
    const data = {
      id: doc.id,
      ...doc.data(),
    };
    results.push(data);
  });

  return results;
};

export { saveExecution, sendMail, destructuredDate, filterPromosByNew };
