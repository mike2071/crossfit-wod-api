const recordService = require('../services/recordService');

const getWorkoutRecord = (req, res) => {
    const { workoutId } = req.params;

    try {
        const record = recordService.getWorkoutRecord(workoutId);
        res.send(record);
      } catch (error) {
        throw error;
      }
};

module.exports = {
  getWorkoutRecord,
};
