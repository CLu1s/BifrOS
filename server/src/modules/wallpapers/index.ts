import { FastifyInstance } from "fastify";

import { wallpaperRoutes } from "./wallpaper.routes";
export default async function wallpaperModule(fastify: FastifyInstance) {
  // Registramos todas las rutas del módulo
  await wallpaperRoutes(fastify);
}
