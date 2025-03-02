import axios from "axios";
import { nanoid } from "nanoid";

async function getDetails(url) {
  const detail = await fetch(
    `https://api.kodansha.us/product/${url}?api-version=1.4`,
  );
  const { response: detailData } = await detail.json();

  const { assetLinkGroups } = detailData;
  // assetLinkGroups is an array of objects and we need to filter the one with the key "name": "Digital"

  const { assetLinks } = assetLinkGroups.find(
    (group) => group.name === "Digital",
  );

  // filter the object assetLinks I want elements that has "name": "Amazon Kindle", "name": "Kobo", "name": "Apple Books",

  return assetLinks.filter(
    (asset) =>
      asset.name === "Amazon Kindle" ||
      asset.name === "Kobo" ||
      asset.name === "Apple Books",
  );
}

async function getPromosCount() {
  const { data } = await axios.get(
    "https://api.kodansha.us/discover/v2?sort=0&subCategory=0&includeSeries=false&isOnSale=true&category=0&fromIndex=0&count=5&api-version=1.4",
  );
  const { fullCount } = data.status;
  return fullCount;
}

async function getDataPromotions(fullCount) {
  let allData = [];
  let fromIndex = 0;
  const pageSize = 1000; // Número de elementos por solicitud
  while (fromIndex < fullCount) {
    const responseCall = await axios.get(
      `https://api.kodansha.us/discover/v2?sort=0&subCategory=0&includeSeries=false&isOnSale=true&category=0&fromIndex=${fromIndex}&count=${pageSize}&api-version=1.4`,
    );
    const { response } = responseCall.data;

    allData = allData.concat(response);
    fromIndex += pageSize;
  }
  return allData;
}

function formatData(item) {
  const { content } = item;
  const variant = content.variants[0] || null;

  return {
    ...variant,
    ...content,
    readableUrl: `https://kodansha.us/product/${item.content.readableUrl || ""}/`,
    dbID: `kodansha-${content.id}`,
    // linksToStores: detail,
  };
}

async function checkPromos() {
  const fullCount = await getPromosCount();
  let allData = await getDataPromotions(fullCount);
  const ids = [];
  const formatedData = allData.map((item) => {
    const formatedData = formatData(item);
    ids.push(formatedData.dbID);
    return formatedData;
  });

  const filter = formatedData.filter((item) => item !== null);
  return { data: filter, ids };
}

function groupBy(object) {
  return object.reduce((acc, promo) => {
    const keyWord = promo.seriesName;
    if (!acc[keyWord]) {
      acc[keyWord] = [];
    }
    acc[keyWord].push({
      ...promo,
      relativeName: `${keyWord} ${promo.relativeName}`,
    });
    return acc;
  }, {});
}

function buildKodanshaMail(object) {
  let html = "";
  let text = "";
  let subject = "";
  const keys = Object.keys(object);
  keys.forEach((key) => {
    html += `<h2>${key}</h2>`;
    subject += `${key}\n`;
    text += `${key}\n`;
    object[key].forEach((element) => {
      html += `<a href="${element.readableUrl}">${element.relativeName}</a><br>`;
      text += `${element.relativeName}\n${element.readableUrl}\n\n`;
      element.digital.forEach((digital) => {
        html += `<a href="${digital.url}">${digital.name}</a><br>`;
        text += `${digital.name}\n${digital.url}\n\n`;
      });
    });
  });

  return { html, text, subject };
}

export { checkPromos, groupBy, buildKodanshaMail };
