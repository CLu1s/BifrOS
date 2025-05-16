import { buildApp } from './app';
import { env } from './config/env';
import { logger } from './config/logger';

async function start(): Promise<void> {
    try {
        const app = await buildApp();

        // Iniciar el servidor
        await app.listen({
            port: env.PORT,
            host: env.HOST
        });

        logger.info(`Server listening on ${env.HOST}:${env.PORT}`);
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
}

start();