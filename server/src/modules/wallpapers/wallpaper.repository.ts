import { PrismaClient, WallpaperQueue } from "../../../generated/prisma/index";
import { AddWallpapersToQueueDto } from "./wallpaper.schema";

export class WallpaperRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Método para obtener wallpapers con paginación básica
  async findMany(
    page: number = 1,
    limit: number = 20,
    category?: string,
  ): Promise<{ wallpapers: WallpaperQueue[]; total: number }> {
    // Construir condiciones de búsqueda
    const where = category ? { category } : {};

    // Calcular el desplazamiento para la paginación
    const skip = (page - 1) * limit;

    // Ejecutar la consulta para obtener los wallpapers
    const wallpapers = await this.prisma.wallpaperQueue.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        addedAt: "desc",
      },
      // include: {
      //     uploader: true // Incluir datos básicos del uploader
      // }
    });

    // Obtener el recuento total para la paginación
    const total = await this.prisma.wallpaperQueue.count({ where });

    return { wallpapers, total };
  }

  async addToQueue(data: AddWallpapersToQueueDto): Promise<WallpaperQueue> {
    const wallpaperQueue = await this.prisma.wallpaperQueue.create({
      data: {
        wallhavenId: data.wallhavenId,
        addedAt: new Date(),
        priority: data.priority,
        deviceId: data.deviceId,
        imageUrl: data.imageUrl,
        thumbnailUrl: data.thumbnailUrl,
        purity: data.purity,
        resolution: data.resolution,
        category: data.category,
      },
    });

    return wallpaperQueue;
  }
}
