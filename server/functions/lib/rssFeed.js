import { parseURL } from "./bookmarks.js";
import { format } from "date-fns";
import admin from "firebase-admin";
const db = admin.firestore();

export const saveFeedToFirestore = async (feed) => {
  if (feed.length === 0) {
    return;
  }
  try {
    const feedRef = db.collection("rssFeeds").doc("cache").collection("items");
    const batch = db.batch();
    feed.forEach((item) => {
      const docRef = feedRef.doc(item.id);
      batch.set(docRef, {
        ...item,
        cachedAt: admin.firestore.Timestamp.now(),
        dateInSec: parseInt(format(new Date(item.pubDate), "T")),
      });
    });
    await batch.commit();
  } catch (e) {
    console.log(e);
  }
};

const extractSourceFromLink = (link) => {
  const url = new URL(link);
  return url.hostname;
};

export const normalizeFeed = async (item) => {
  try {
    let imageUrl = "";
    if (item.enclosure) {
      imageUrl = item.enclosure.url;
    } else {
      const ogData = await parseURL(item.link);
      imageUrl = ogData.ogImage;
    }
    return {
      id: sanitizeGUID(item.guid),
      title: item.title,
      link: item.link,
      imageUrl,
      pubDate: item.pubDate,
      source: extractSourceFromLink(item.link),
      content: item.content ?? "",
      category: item.category ?? "",
    };
  } catch (e) {
    console.log(e);
    throw new Error("Failed to normalize feed.");
  }
};

export const cleanCache = async () => {
  const collectionRef = db
    .collection("rssFeeds")
    .doc("cache")
    .collection("items");
  const now = admin.firestore.Timestamp.now();
  const sixHoursAgo = new Date(now.toDate().getTime() - 6 * 60 * 60 * 1000);

  const snapshot = await collectionRef
    .where("cachedAt", "<", sixHoursAgo)
    .get();

  if (!snapshot.empty) {
    const batch = db.batch();
    snapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();
    return "Expired cache cleaned successfully.";
  } else {
    return "No expired cache found.";
  }
};

export const sanitizeGUID = (guid) => {
  // normalize guid to be a valid id in firebase removing dots , https:// and /
  return guid
    .replace(/\./g, "")
    .replace(/\//g, "")
    .replace(/https:/g, "");
};
