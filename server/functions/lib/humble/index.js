import * as cheerio from "cheerio";
import axios from "axios";

const main = async () => {
  const { data } = await axios.get("https://www.humblebundle.com/books");
  console.log(data);
  const $ = cheerio.load(data);
  const title = $("body").find(".tile-holder").get();

  console.log(title);

  return { message: "Hello from Humble 6" };
};

export default main;
