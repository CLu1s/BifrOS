const COLLECTION_URL = "https://wallhaven.cc/api/v1/collections/Raku/";
export const SEARCH_URL = "https://wallhaven.cc/api/v1/search?";
const KEY = process.env.WALLHAVEN_KEY;

export const getCollections = async (id, page = 1) => {
  let collection = id;
  if (collection === null) {
    collection = "810757";
  }

  const apiKey = `apikey=${KEY}`;
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
