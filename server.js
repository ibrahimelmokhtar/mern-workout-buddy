import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import workoutRoutes from './routes/workouts.routes.js';

// Environment variables
dotenv.config();
const { PORT } = process.env;

const app = express();

// Configure server
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// Routes
app.use('/api/workouts', workoutRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`>>> Server running on port ${PORT}`);
});
