const express = require("express");
const router = express.Router();

const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getWorkoutById);

router.get("/:workoutId/records", recordController.getWorkoutRecord);

router.post("/", workoutController.createWorkout);

router.patch("/:workoutId", workoutController.updateWorkout);

router.delete("/:workoutId", workoutController.deleteWorkout);

module.exports = router;
