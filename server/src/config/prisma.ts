import { PrismaClient } from '@prisma/client';
import { env } from './env';
import { logger } from './logger';

const prismaClientSingleton = () => {
    return new PrismaClient({
        log: env.NODE_ENV === 'development'
            ? ['query', 'error', 'warn']
            : ['error'],
    });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Manejar errores de conexión a la base de datos
prisma.$connect()
    .then(() => {
        logger.info('Database connection established');
    })
    .catch((error: any) => {
        logger.error('Failed to connect to database', error);
        process.exit(1);
    });

// Cerrar conexión al salir
process.on('beforeExit', async () => {
    await prisma.$disconnect();
    logger.info('Database connection closed');
});