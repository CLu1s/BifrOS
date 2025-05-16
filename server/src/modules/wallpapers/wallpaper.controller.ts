import { FastifyRequest, FastifyReply } from "fastify";
import { WallpaperService } from "./wallpaper.service";
import {
  addWallpapersToQueueSchema,
  listWallpapersQueueSchema,
} from "./wallpaper.schema";
import { WallhavenService } from "@/modules/wallpapers/wallhaven.service";

export class WallpaperController {
  private wallpaperService: WallpaperService;
  private wallhavenService: WallhavenService;
  constructor() {
    this.wallpaperService = new WallpaperService();
    this.wallhavenService = new WallhavenService();
  }

  // Método para listar wallpapers
  async listWallpapersQueue(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    try {
      // Validar y transformar parámetros de consulta
      const queryParams = listWallpapersQueueSchema.parse(request.query);

      // Obtener los wallpapers del servicio
      const result = await this.wallpaperService.listWallpapers(queryParams);
      console.log("result", this.wallhavenService);
      // Formatear la respuesta con metadata de paginación
      reply.code(200).send({
        data: result.wallpapers,
        meta: {
          total: result.total,
          page: result.page,
          limit: result.limit,
          pages: Math.ceil(result.total / result.limit),
        },
      });
    } catch (error: any) {
      console.error("Error listing wallpapers:", error);

      // Manejar errores de validación
      if (error.name === "ZodError") {
        return reply.code(400).send({
          error: "Validation error",
          details: error.errors,
        });
      }

      // Manejar otros errores
      reply.code(500).send({
        error: "Internal Server Error",
        message: "An error occurred while processing your request",
      });
    }
  }

  // // Método para crear un nuevo wallpaper
  // async createWallpaper(
  //   request: FastifyRequest,
  //   reply: FastifyReply,
  // ): Promise<void> {
  //   try {
  //     // Validar el cuerpo de la petición
  //     const wallpaperData = createWallpaperSchema.parse(request.body);
  //
  //     // Crear el wallpaper
  //     const wallpaper =
  //       await this.wallpaperService.createWallpaper(wallpaperData);
  //
  //     // Enviar respuesta con el wallpaper creado
  //     reply.code(201).send(wallpaper);
  //   } catch (error: any) {
  //     console.error("Error creating wallpaper:", error);
  //
  //     // Manejar errores de validación
  //     if (error.name === "ZodError") {
  //       return reply.code(400).send({
  //         error: "Validation error",
  //         details: error.errors,
  //       });
  //     }
  //
  //     // Manejar errores de Prisma (por ejemplo, restricciones de unicidad)
  //     if (error.name === "PrismaClientKnownRequestError") {
  //       return reply.code(400).send({
  //         error: "Database error",
  //         message:
  //           "Could not create wallpaper. It may already exist or reference invalid data.",
  //       });
  //     }
  //
  //     // Manejar otros errores
  //     reply.code(500).send({
  //       error: "Internal Server Error",
  //       message: "An error occurred while processing your request",
  //     });
  //   }
  // }

  // Método para añadir wallpapers a la cola
  async addWallpapersToQueue(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    try {
      // Validar el cuerpo de la petición
      const wallpaperQueueData = addWallpapersToQueueSchema.parse(request.body);

      // Añadir los wallpapers a la cola
      const wallpaperQueue =
        await this.wallpaperService.addWallpapersToQueue(wallpaperQueueData);

      // Enviar respuesta con los wallpapers añadidos a la cola
      reply.code(201).send(wallpaperQueue);
    } catch (error: any) {
      console.error("Error adding wallpapers to queue:", error);

      // Manejar errores de validación
      if (error.name === "ZodError") {
        return reply.code(400).send({
          error: "Validation error",
          details: error.errors,
        });
      }

      // Manejar otros errores
      reply.code(500).send({
        error: "Internal Server Error",
        message: "An error occurred while processing your request",
      });
    }
  }

  async getHotCollection(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<void> {
    try {
      console.log("Obteniendo colecciones de Wallhaven", this.wallpaperService);
      const collections = await this.wallhavenService.getHotCollection();
      return reply.send(collections);
    } catch (error) {
      console.error("Error al obtener colecciones:", error);
      return reply.status(500).send({
        error: "Error al obtener colecciones controller",
      });
    }
  }
}
