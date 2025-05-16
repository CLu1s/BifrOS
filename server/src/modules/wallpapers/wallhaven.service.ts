// src/modules/wallpapers/services/wallhaven-service.ts
import NodeCache from "node-cache";
import { env } from "@/config/env";
import { createHttpClient } from "@/shared/lib/http-client";

// Caché con tiempo de vida de 15 minutos
const cache = new NodeCache({ stdTTL: 900 });

const wallhavenClient = createHttpClient("https://wallhaven.cc/api/v1");

export class WallhavenService {
  // Obtener colecciones del usuario
  async getCollections() {
    const cacheKey = "collections";

    // Verificar si tenemos datos en caché
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    try {
      const response = await wallhavenClient.get(
        `/collections?apikey=${env.WALLHAVEN_API_KEY}`,
      );

      // Guardar en caché
      cache.set(cacheKey, response.data);

      return response.data;
    } catch (error) {
      console.error("Error al obtener colecciones:", error);
      throw new Error("No se pudieron obtener las colecciones de Wallhaven");
    }
  }
  async getHotCollection() {
    const cacheKey = "hot-collection";

    // Verificar si tenemos datos en caché
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    try {
      const response = await wallhavenClient.get(
        `/search?categories=111&purity=110&sorting=hot&order=desc&ai_art_filter=1`,
      );
      console.log(response.data);
      // Guardar en caché
      cache.set(cacheKey, response.data);

      return response.data;
    } catch (error) {
      console.error("Error al obtener colecciones:", error);
      throw new Error("No se pudieron obtener las colecciones de Wallhaven");
    }
  }

  // Añade más métodos según necesites
  // Por ejemplo: getWallpaperById, searchWallpapers, etc.
}
