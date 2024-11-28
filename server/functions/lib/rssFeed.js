import { nanoid } from "nanoid";
import { parseURL } from "./bookmarks.js";
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
      batch.set(docRef, { ...item, cachedAt: admin.firestore.Timestamp.now() });
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

export const normalizeFeed = async (feed) => {
  const items = feed.map(async (item) => {
    let imageUrl = "";
    if (item.enclosure) {
      imageUrl = item.enclosure.url;
    } else {
      const ogData = await parseURL(item.link);
      imageUrl = ogData.ogImage;
    }
    return {
      id: nanoid(),
      title: item.title,
      link: item.link,
      imageUrl,
      pubDate: item.pubDate,
      source: extractSourceFromLink(item.link),
      content: item.content ?? "",
    };
  });
  return Promise.all(items);
};

export const cleanCache = async () => {
  const collectionRef = db
    .collection("rssFeeds")
    .doc("cache")
    .collection("items");
  const now = admin.firestore.Timestamp.now();
  const oneHourAgo = new Date(now.toDate().getTime() - 60 * 60 * 1000);

  const snapshot = await collectionRef.where("cachedAt", "<", oneHourAgo).get();

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
