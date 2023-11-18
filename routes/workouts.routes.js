import { Router } from 'express';
import {
  addWorkout,
  deleteWorkout,
  getWorkouts,
  showWorkout,
  updateWorkout,
} from '../controllers/workouts.controllers.js';

const router = Router();

// Get all workouts
router.get('/', getWorkouts);

// Show single workout
router.get('/:id', showWorkout);

// Add new workout
router.post('/', addWorkout);

// Update specific workout
router.patch('/:id', updateWorkout);

// Delete specific workout
router.delete('/:id', deleteWorkout);

export default router;
