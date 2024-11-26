import * as cheerio from "cheerio";
import axios from "axios";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore();

// Helper function to fetch and load HTML
const fetchHTML = async (url) => {
  try {
    const { data } = await axios.get(url);
    return cheerio.load(data);
  } catch (error) {
    console.error(`Error fetching URL: ${url}`, error);
    return null;
  }
};

const processString = (input) => {
  // Check if the string contains only numbers and symbols (e.g., %, $, etc.)
  if (/^[\d.]+[%\w]*$/.test(input)) {
    // Extract and return the number
    const numberMatch = input.match(/[\d.]+/);
    return numberMatch ? parseFloat(numberMatch[0]) : null;
  }

  // If it contains letters or doesn't fit the numeric pattern, return the string as-is
  return input;
};

const checkEntry = async (url) => {
  const $ = await fetchHTML(url);
  if (!$) return { data: [], image: "" }; // Return early if fetching failed

  // Extract the first image that doesn't include "768" in the href
  const image =
    $('a[data-rel="penci-gallery-image-content"]')
      .filter((i, el) => !$(el).attr("href").includes("768"))
      .first()
      .attr("href") || "";

  // Map keys for table rows
  const keys = ["rank", "title", "score"];
  const data = [];

  // Extract data from the first 10 rows
  $("tr")
    .slice(0, 11)
    .each((_, el) => {
      const obj = {};
      $(el)
        .find("td")
        .each((j, td) => {
          const cellText = $(td).text().trim();
          if (keys[j]) obj[keys[j]] = processString(cellText); // Only map valid keys
        });
      if (Object.keys(obj).length > 0) data.push(obj);
    });

  return { data, image };
};

// Main scraper function
export const checkAnimeCornerScraper = async (lastElements) => {
  const $ = await fetchHTML(
    "https://animecorner.me/category/anime-corner/rankings/anime-of-the-week/",
  );
  if (!$) return []; // Return early if fetching failed

  const posts = $(".list-post");
  const results = await Promise.all(
    posts
      .map(async (_, el) => {
        const link = $(el).find(".entry-title a").attr("href");
        const isAlreadyScraped = lastElements.findIndex((item) => {
          return item.metrics.urlsScraped === link;
        });
        if (!link || isAlreadyScraped > -1) return null;

        const entryData = await checkEntry(link);
        const title = $(el).find(".entry-title a").text();
        return {
          id: title.split(" ").join("-"),
          title,
          link,
          image: entryData.image,
          data: entryData.data,
        };
      })
      .get(),
  );

  // Filter out null results
  return results.filter(Boolean);
};

export const getLast10ElementsFromDB = async () => {
  const ref = db.collection("scraper");
  const queryRef = ref
    .where(
      "metrics.url",
      "==",
      "https://animecorner.me/category/anime-corner/rankings/anime-of-the-week/",
    )
    .orderBy("timestamp")
    .limit(10);
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
