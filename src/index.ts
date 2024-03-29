import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

import router from './router';
import mongoose from 'mongoose';

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL as string);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());
