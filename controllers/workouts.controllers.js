// Get all workouts
export const getWorkouts = (req, res) => {
  res.json({
    status: 200,
    msg: 'Get All Workouts',
  });
};

// Show single workout
export const showWorkout = (req, res) => {
  res.json({
    status: 200,
    msg: 'Show Single Workouts',
  });
};

// Add new workout
export const addWorkout = (req, res) => {
  res.json({
    status: 201,
    msg: 'Add New Workout',
  });
};

// Update specific workout
export const updateWorkout = (req, res) => {
  res.json({
    status: 200,
    msg: 'Update Specific Workout',
  });
};

// Delete specific workout
export const deleteWorkout = (req, res) => {
  res.json({
    status: 200,
    msg: 'Delete Specific Workout',
  });
};
