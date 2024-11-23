import ogs from "open-graph-scraper";

function extractBaseUrl(url) {
  try {
    // Usamos la clase URL para analizar la URL
    const parsedUrl = new URL(url);
    // Retornamos la base de la URL que incluye el protocolo, host y puerto (si existe)
    return `${parsedUrl.protocol}//${parsedUrl.host}`;
  } catch (error) {
    console.error("URL no válida:", error);
    return "";
  }
}

function buildFaviconUrl(url, favicon) {
  // Si el favicon es una URL absoluta, la retornamos tal cual
  if (favicon.startsWith("http")) {
    return favicon;
  }
  // Si el favicon es una URL relativa, la construimos a partir de la URL de la página
  return extractBaseUrl(url) + favicon;
}

export async function parseURL(url) {
  if (!url) return null;
  try {
    const options = {
      url,
    };
    const ogData = await ogs(options);
    const { ogImage, favicon, ogDescription, ogTitle } = ogData.result;
    return {
      ogImage: ogImage ? ogImage[0]?.url : "",
      favicon: favicon ? buildFaviconUrl(extractBaseUrl(url), favicon) : "",
      ogDescription: ogDescription || "",
      ogTitle: ogTitle || url,
      url,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      result: {
        ogImage: [{ url: "/default_image.jpeg" }],
        favicon: "",
        ogDescription: "",
        ogTitle: url,
      },
    };
  }
}
