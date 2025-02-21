import { getFirestore } from "firebase-admin/firestore";

const COLLECTION_URL = "https://wallhaven.cc/api/v1/collections/Raku/";
export const SEARCH_URL = "https://wallhaven.cc/api/v1/search?";
const KEY = process.env.WALLHAVEN_KEY;
const db = getFirestore();
const cache = new Map();

const buildUrl = ({ type, collectionID, page, ratio, sorting, topRange }) => {
  let url = `${COLLECTION_URL}${collectionID}?apikey=${KEY}&page=${page}`;
  if (type === "search") {
    url = `${SEARCH_URL}sorting=${sorting}&page=${page}&apikey=${KEY}`;
  }
  if (ratio) url += `&ratios=${ratio}`;
  if (topRange) url += `&topRange=${topRange ?? "1w"}`;

  return url;
};

export const getCollections = async (id = "810757", page = 1) => {
  const cacheKey = `${id}_${page}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    let url;
    switch (id) {
      case "toplist":
        url = buildUrl({
          type: "search",
          sorting: "toplist",
          topRange: "1w",
          page,
        });
        break;
      case "toplist3d":
        url = buildUrl({
          type: "search",
          sorting: "toplist",
          ratio: "landscape",
          topRange: "3d",
          page,
        });
        break;
      case "hot":
        url = buildUrl({
          type: "search",
          sorting: "hot",
          page,
        });
        break;
      case "random":
        url = buildUrl({
          type: "search",
          sorting: "random",
          page,
        });
        break;
      case "latest":
        url = buildUrl({
          type: "search",
          sorting: "date_added",
          page,
        });
        break;
      default:
        url = buildUrl({ type: "collection", collectionID: id, page });
        break;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    cache.set(cacheKey, data); // Cachea el resultado
    return data;
  } catch (e) {
    console.error(
      `Error fetching collection ${id} on page ${page}:`,
      e.message,
    );
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
    const wallpaper = await ref.orderBy("order", "desc").limit(1).get();
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

export const saveWallpaperHistory = async (data) => {
  const id = data.id.includes("history_") ? data.id : `history_${Date.now()}`;

  const saveData = {
    ...data,
    id,
    timestamp: new Date().toISOString(),
  };

  const ref = db
    .collection("wallpapers")
    .doc("myData")
    .collection(`history`)
    .doc(id);
  await ref.set(saveData);
};
