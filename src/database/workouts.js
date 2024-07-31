const { stat } = require("fs");
const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getWorkoutById = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);
  if (!workout) {
    return;
  }
  return workout;
};

const createWorkout = (newWorkout) => {
  const isAlreadyAdded =
  DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  console.log("🚀 ~ createWorkout ~ isAlreadyAdded:", isAlreadyAdded)
  if (isAlreadyAdded) {
    console.log("🚀 ~ createWorkout ~ isAlreadyAdded:", isAlreadyAdded)
    throw {
      status: 400,
      message: `Workout with the name ${newWorkout.name} already exists`,
    };
  }
  
  try{
    console.log("🚀 ~ createWorkout ~ newWorkout:", newWorkout)
    DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }
  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForDeletion === -1) {
    return;
  }
  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
