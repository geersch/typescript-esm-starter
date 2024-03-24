import express from 'express';
import greetingsRouter from './routes/greetings.js';

const app = express();

app.use('/api/greetings', greetingsRouter);

export { app };
