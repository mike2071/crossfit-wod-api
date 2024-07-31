const workouts = require("../database/workouts");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  const result = workouts.getAllWorkouts();

  return result;
};

const getWorkoutById = () => {
  return "GET workout by id";
};

const createWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  try {
    const createdWorkout = workouts.createWorkout(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateWorkout = (workoutId, changes) => {
  const updatedWorkout = workouts.updateWorkout(workoutId, changes);

  return updatedWorkout;
};

const deleteWorkout = (workoutId) => {
  const deletedWorkout = workouts.deleteWorkout(workoutId);

  return deletedWorkout;
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
