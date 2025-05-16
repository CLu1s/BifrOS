import { WallpaperQueue } from "../../../generated/prisma/index";
import { WallpaperRepository } from "./wallpaper.repository";
import { AddWallpapersToQueueDto, ListQueueDto } from "./wallpaper.schema";

export class WallpaperService {
  private wallpaperRepository: WallpaperRepository;

  constructor() {
    this.wallpaperRepository = new WallpaperRepository();
  }

  // Método para listar wallpapers
  async listWallpapers(
    params: ListQueueDto,
  ): Promise<{
    wallpapers: WallpaperQueue[];
    total: number;
    page: number;
    limit: number;
  }> {
    const { page = 1, limit = 20, category } = params;

    const result = await this.wallpaperRepository.findMany(
      page,
      limit,
      category,
    );

    return {
      wallpapers: result.wallpapers,
      total: result.total,
      page,
      limit,
    };
  }
  //
  // // Método para crear un nuevo wallpaper
  // async createWallpaper(data: CreateWallpaperDto): Promise<Wallpaper> {
  //     // Aquí podrías añadir lógica de negocio adicional
  //     // Por ejemplo, validar que el uploader existe, etc.
  //
  //     const wallpaper = await this.wallpaperRepository.create(data);
  //
  //     return wallpaper;
  // }
  // Método para añadir wallpapers a la cola
  async addWallpapersToQueue(
    data: AddWallpapersToQueueDto,
  ): Promise<WallpaperQueue> {
    const wallpaperQueue = await this.wallpaperRepository.addToQueue(data);

    return wallpaperQueue;
  }
}
