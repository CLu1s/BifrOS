import { FastifyInstance } from "fastify";
import { WallpaperController } from "./wallpaper.controller";

export async function wallpaperRoutes(fastify: FastifyInstance): Promise<void> {
  // Crear una instancia del controlador
  const wallpaperController = new WallpaperController();

  // Registrar la ruta para listar wallpapers
  fastify.get("/wallpapers/queue", (request, reply) => {
    return wallpaperController.listWallpapersQueue(request, reply);
  });

  // // Registrar la ruta para crear un wallpaper
  // fastify.post('/wallpapers', (request, reply) => {
  //     return wallpaperController.createWallpaper(request, reply);
  // });
  // Registrar la ruta para añadir wallpapers a la cola
  fastify.post("/wallpapers/queue", (request, reply) => {
    return wallpaperController.addWallpapersToQueue(request, reply);
  });

  // Más rutas...
  fastify.get(
    "/wallhaven/hot-collection",
    wallpaperController.getHotCollection.bind(wallpaperController),
  );
}
