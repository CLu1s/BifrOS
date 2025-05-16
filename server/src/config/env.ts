import { config } from "dotenv";
import { z } from "zod";

// Carga variables de .env
config();

// Define el esquema de validación
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().transform(Number).default("4000"),
  HOST: z.string().default("0.0.0.0"),
  DATABASE_URL: z.string(),
  WALLHAVEN_API_KEY: z.string({
    required_error: "WALLHAVEN_API_KEY es requerida",
  }),
  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace"])
    .default("info"),
});

// Valida las variables de entorno
const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables:", _env.error.format());
  throw new Error("Invalid environment variables");
}

export const env = _env.data;
