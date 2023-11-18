import { Types } from 'mongoose';
import Workout from '../models/workout.model.js';

// Get all workouts
export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.json({
      status: 200,
      msg: 'Get All Workouts',
      total: workouts.length,
      data: workouts,
    });
  } catch (error) {
    res.json({
      status: 400,
      msg: error.message,
    });
  }
};

// Show single workout
export const showWorkout = async (req, res) => {
  // Check valid ID
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: 400,
      msg: 'Invalid workout ID!',
    });
  }

  try {
    const workout = await Workout.findOne({ _id: id });
    if (!workout) {
      return res.status(404).json({
        status: 404,
        msg: 'No such workout!',
      });
    }

    res.status(200).json({
      status: 200,
      msg: 'Show Single Workouts',
      data: workout,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      msg: error.message,
    });
  }
};

// Add new workout
export const addWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.json({
      status: 201,
      msg: 'Add New Workout',
      data: workout,
    });
  } catch (error) {
    res.json({
      status: 400,
      msg: error.message,
    });
  }
};

// Update specific workout
export const updateWorkout = async (req, res) => {
  // Check valid ID
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: 400,
      msg: 'Invalid workout ID!',
    });
  }

  try {
    const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!workout) {
      return res.status(404).json({
        status: 404,
        msg: 'No such workout!',
      });
    }

    res.json({
      status: 200,
      msg: 'Update Specific Workout',
      data: workout,
    });
  } catch (error) {
    res.json({
      status: 400,
      msg: error.message,
    });
  }
};

// Delete specific workout
export const deleteWorkout = async (req, res) => {
  // Check valid ID
  const { id } = req.params;
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: 400,
      msg: 'Invalid workout ID!',
    });
  }

  try {
    const workout = await Workout.findOneAndDelete({ _id: id });
    if (!workout) {
      return res.status(404).json({
        status: 404,
        msg: 'No such workout!',
      });
    }

    res.status(200).json({
      status: 200,
      msg: 'Delete Specific Workout',
      data: workout,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      msg: error.message,
    });
  }
};
