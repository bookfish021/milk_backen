import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import logger from './libs/logger';
import connectMongo from './libs/connect_mongo';
import router from './src/routes';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

connectMongo();

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use(express.static('history'));

app.listen(process.env.PORT, () => {
  logger.info('Server is running');
});
