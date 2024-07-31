const Record = require("./../database/Record");

const getWorkoutRecord = (workoutId) => {
  try {
    const record = Record.getWorkoutRecord(workoutId);

    return record;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getWorkoutRecord,
};
