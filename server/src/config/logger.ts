import pino from 'pino';
import { env } from './env';

export const logger = pino({
    level: env.LOG_LEVEL,
    transport: env.NODE_ENV !== 'production'
        ? { target: 'pino-pretty' }
        : undefined,
    formatters: {
        level: (label) => {
            return { level: label };
        },
    },
});