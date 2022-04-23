import express, { Express } from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import authRouter from './routes/auth';
import passportConfig from './passportConfig';
import db from './db';

dotenv.config();

// Get environment variables
dotenv.config();

// Init express
const app:Express = express();

// Init DB
db();

// Routes
app.use('/', authRouter);

// Passport configuration
passportConfig(passport);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}!`);
});

export default app;
