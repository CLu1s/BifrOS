import sgMail from "@sendgrid/mail";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
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

const saveKodanshaExecution = async (newDataArray, newIDs, idToDel) => {
  const batch = db.batch();
  try {
    newDataArray.forEach((item) => {
      if (!newIDs.has(`kodansha-${item.id}`)) {
        return;
      }
      const mangaRef = db.collection("kodansha").doc(`kodansha-${item.id}`);
      batch.set(mangaRef, {
        ...item,
        last_update: new Date().toISOString(),
      });

      const promoHistoryRef = db
        .collection("kodansha_history")
        .doc(`kodansha-${item.id}`);
      const { id, dbID, title, ...promo } = item;
      batch.set(
        promoHistoryRef,
        {
          id,
          dbID,
          title,
          promotionDates: FieldValue.arrayUnion(new Date().toISOString()),
        },
        { merge: true },
      );
    });

    idToDel.forEach((id) => {
      const docRef = db.collection("kodansha").doc(id);
      batch.delete(docRef);
    });

    await batch.commit();
    return true;
  } catch (error) {
    console.log(error);
  }
};

async function getKodanshaPromos() {
  const data = [];
  const ids = [];
  const snap = await db.collection("kodansha").get();
  snap.forEach((doc) => {
    ids.push(doc.id);
    data.push({ id: doc.id, ...doc.data() });
  });
  return { data, ids };
}

export {
  saveExecution,
  sendMail,
  destructuredDate,
  filterPromosByNew,
  saveKodanshaExecution,
  getKodanshaPromos,
};
