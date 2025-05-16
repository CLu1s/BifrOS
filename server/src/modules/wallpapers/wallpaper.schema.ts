import { z } from "zod";

// Schema base para wallpapers
export const wallpaperBaseSchema = z.object({
  wallhavenId: z.string(),
  imageUrl: z.string().url(),
  thumbnailUrl: z.string().url(),
  purity: z.enum(["sfw", "sketchy", "nsfw"]),
  resolution: z.string(),
  category: z.enum(["general", "anime", "people"]),
});

// // Schema para crear un wallpaper
// export const createWallpaperSchema = wallpaperBaseSchema.extend({
//     id: z.string(),
//     tags: z.array(z.number().int()),
//     colors: z.array(z.string().regex(/^#[0-9A-F]{6}$/i)),
//     thumbnails: z.object({
//         large: z.string().url(),
//         original: z.string().url(),
//         small: z.string().url()
//     })
// });
//
// // Schema para actualizar un wallpaper
// export const updateWallpaperSchema = wallpaperBaseSchema.partial();
//
// // Schema para filtrar wallpapers en consultas
// export const wallpaperQuerySchema = z.object({
//     page: z.string().transform(Number).default('1'),
//     limit: z.string().transform(Number).default('20'),
//     category: z.string().optional(),
//     purity: z.string().optional(),
//     tag: z.string().optional(),
//     // uploader: z.string().optional(),
//     sortBy: z.enum(['views', 'favorites', 'createdAt']).default('createdAt'),
//     order: z.enum(['asc', 'desc']).default('desc')
// });
//
// // Schema para listar wallpapers (parámetros de consulta)
export const listWallpapersQueueSchema = z.object({
  page: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 1)),
  limit: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val, 10) : 20)),
  category: z.string().optional(),
});

// Schema para agregar wallpapers a la cola
export const addWallpapersToQueueSchema = wallpaperBaseSchema.extend({
  addedAt: z.date().default(() => new Date()),
  priority: z.number().int().default(100),
  deviceId: z.string().optional(),
  status: z.enum(["pending", "processing", "completed"]).default("pending"),
});

// Tipos derivados de los schemas
export type WallpaperBaseDto = z.infer<typeof wallpaperBaseSchema>;
export type ListQueueDto = z.infer<typeof listWallpapersQueueSchema>;
export type AddWallpapersToQueueDto = z.infer<
  typeof addWallpapersToQueueSchema
>;
