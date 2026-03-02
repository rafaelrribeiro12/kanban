import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';
import { PrismaClient } from '@prisma/client';
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ['error'],
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/api', routes);


export default app;
