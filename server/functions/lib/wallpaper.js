import { getFirestore } from "firebase-admin/firestore";

const COLLECTION_URL = "https://wallhaven.cc/api/v1/collections/Raku/";
export const SEARCH_URL = "https://wallhaven.cc/api/v1/search?";
const KEY = process.env.WALLHAVEN_KEY;
const db = getFirestore();

export const getCollections = async (id, page = 1) => {
  let collection = id;
  if (collection === null) {
    collection = "810757";
  }

  try {
    if (collection === "top") {
      const collections = await fetch(
        `${SEARCH_URL}ratios=portrait&sorting=toplist&order=desc&topRange=1w&page=${page}&apikey=${KEY}`,
      );
      return await collections.json();
    } else if (collection === "htop") {
      const collections = await fetch(
        `${SEARCH_URL}ratios=landscape&sorting=toplist&order=desc&topRange=1w&page=${page}&apikey=${KEY}`,
      );
      return await collections.json();
    } else {
      const collections = await fetch(
        `${COLLECTION_URL}${collection}?apikey=${KEY}&page=${page}`,
      );
      return await collections.json();
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getWallpaperFromQueue = async (type) => {
  const random = Math.random() >= 0.5 ? "portrait" : "landscape";
  const queueType = type === "any" ? random : type;
  try {
    const ref = db
      .collection("wallpapers")
      .doc("myData")
      .collection(`${queueType}-queue`);
    const wallpaper = await ref.orderBy("order").limit(1).get();
    const wallpaperData = wallpaper.docs[0].data();
    await ref.doc(wallpaper.docs[0].id).delete();
    return wallpaperData;
  } catch (e) {
    const newType = queueType === "portrait" ? "landscape" : "portrait";
    const ref = db
      .collection("wallpapers")
      .doc("myData")
      .collection(`${newType}-queue`);
    const wallpaper = await ref.orderBy("order").limit(1).get();
    const wallpaperData = wallpaper.docs[0].data();
    await ref.doc(wallpaper.docs[0].id).delete();
    return wallpaperData;
  }
};

export const getSafeWallpaper = async () => {
  const KEY = process.env.WALLHAVEN_KEY;
  const ENDPOINT = `https://wallhaven.cc/api/v1/collections/Raku/1651782?apikey=${KEY}`;
  const response = await fetch(ENDPOINT);
  const { meta } = await response.json();
  const { last_page, per_page } = meta;
  const page = Math.floor(Math.random() * last_page) + 1;
  const wallpaperIndex = Math.floor(Math.random() * per_page);
  const url = `https://wallhaven.cc/api/v1/collections/Raku/1651782?apikey=${KEY}&page=${page}`;
  const res = await fetch(url);
  const data = await res.json();

  const { data: wallpapers } = data;
  return wallpapers[wallpaperIndex];
};
