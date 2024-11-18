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

async function checkPromos() {
  const result = await fetch(
    "https://api.kodansha.us/discover/v2?sort=0&subCategory=0&includeSeries=false&isOnSale=true&category=0&fromIndex=0&count=24&api-version=1.4",
  );
  const { response: data } = await result.json();
  const formatData = data.map(async (item) => {
    const detail = await getDetails(item.content.readableUrl);
    return {
      seriesName: item.content.seriesName,
      relativeName: item.content.relativeName,
      readableUrl: `https://kodansha.us/product/${item.content.readableUrl}/`,
      linksToStores: detail,
    };
  });

  return await Promise.all(formatData);
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
      linksToStores: promo.linksToStores.map((link) => ({
        name: link.name,
        url: link.url,
      })),
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
