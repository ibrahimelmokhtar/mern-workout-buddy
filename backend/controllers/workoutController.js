/* ********************************************************** */
/* **********************  CREATE  ************************** */
/* ********************************************************** */
export const createWorkout = (req, res) => {
	res.status(200).json({ message: 'Workout is added successfully' });
};

/* ********************************************************** */
/* ***********************  READ  *************************** */
/* ********************************************************** */
export const getAllWorkouts = (req, res) => {
	res.status(200).json({ message: 'All workouts are sent successfully' });
};
export const getWorkout = (req, res) => {
	res.status(200).json({ message: 'Workout is sent successfully' });
};

/* ********************************************************** */
/* **********************  UPDATE  ************************** */
/* ********************************************************** */
export const updateWorkout = (req, res) => {
	res.status(200).json({ message: 'Workout is updated successfully' });
};

/* ********************************************************** */
/* **********************  DELETE  ************************** */
/* ********************************************************** */
export const deleteAllWorkouts = (req, res) => {
	res.status(200).json({ message: 'All workouts are deleted successfully' });
};
export const deleteWorkout = (req, res) => {
	res.status(200).json({ message: 'Workout is deleted successfully' });
};
