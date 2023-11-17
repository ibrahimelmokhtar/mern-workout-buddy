import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import dotenv from 'dotenv';

// Environment variables
dotenv.config();
const { PORT } = process.env;

const app = express();

// Configure server
app.use(cors());
app.use(morgan('tiny'));

// Routes
app.get('/api', (req, res) => {
  res.send('hello from simple server :)');
});

// Start server
app.listen(PORT, () => {
  console.log(`>>> Server running on port ${PORT}`);
});
