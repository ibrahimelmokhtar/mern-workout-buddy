import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import workoutRoutes from './routes/workouts.routes.js';

// Environment variables
dotenv.config();
const { PORT, MONGOOSE_USERNAME, MONGOOSE_PASSWORD } = process.env;

const app = express();

// Configure server
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('tiny'));

// Routes
app.use('/api/workouts', workoutRoutes);

// Configure Database
mongoose
  .connect(
    `mongodb+srv://${MONGOOSE_USERNAME}:${MONGOOSE_PASSWORD}@workoutbuddy.qudpb1y.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => {
    // Start server
    app.listen(PORT, () => {
      console.log(`>>> Connected to DB & server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
