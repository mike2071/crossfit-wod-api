const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  try {
    const workouts = workoutService.getAllWorkouts();
    res.send(workouts);
  } catch (error) {
    res.status(error?.status || 500)
    .send({ status: "FAILED", data: error?.message || error });
  }
};

const getWorkoutById = (req, res) => {
  const workout = workoutService.getWorkoutById();
  res.send(workout);
};

const createWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400).send({
      status: "error",
        data: {
          message: "Please provide name, mode, equipment, exercises, and trainer tips",
        },
    });
    
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  try{
    const createdWorkout = workoutService.createWorkout(newWorkout);

  res.status(201).send({ status: "OK", data: createdWorkout });
  } catch (error) {
    res.status(error?.message || 500)
    .send({ status: "FAILED", data: error?.message || error });
    }
};

const updateWorkout = (req, res) => {
  const {
    body,
    params: { workoutId },
  } = req;

  if (!workoutId) {
    return;
  }

  const workout = workoutService.updateWorkout(workoutId, body);
  res.send({ status: "OK" }, workout);
};

const deleteWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    return;
  }

  workoutService.deleteWorkout(workoutId);
  res.status(204).send({status: 'OK'});
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
