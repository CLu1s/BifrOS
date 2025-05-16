import Fastify, { FastifyInstance } from 'fastify';
import { logger } from './config/logger';
import { env } from './config/env';

// Importar módulos
import wallpaperModule from './modules/wallpapers';

export async function buildApp(): Promise<FastifyInstance> {
    const app = Fastify({
        logger: true
    });

    // Registrar plugins
    await registerPlugins(app);

    // Registrar rutas
    await registerRoutes(app);

    // Manejador global de errores
    app.setErrorHandler((error, request, reply) => {
        logger.error(error);
        reply.status(error.statusCode || 500).send({
            error: error.name,
            message: error.message,
            statusCode: error.statusCode || 500
        });
    });

    return app;
}

async function registerPlugins(app: FastifyInstance): Promise<void> {
    // Aquí registraremos los plugins (CORS, Swagger, etc.)
}

async function registerRoutes(app: FastifyInstance): Promise<void> {
    // Ruta de prueba
    app.get('/health', async () => {
        return { status: 'ok', timestamp: new Date().toISOString() };
    });

    // Aquí registraremos los módulos de la API

    app.register(wallpaperModule, {
        prefix: '/api/' // Prefijo para las rutas de la API
    } );
}