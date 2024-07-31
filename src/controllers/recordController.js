// create a function to fetch all records from the db.json file

const DB = require("../database/db.json");

const getWorkoutRecord = (req, res) => {
  const { workoutId } = req.params;
  
    try {
    const record = DB.records.filter((record) => {
        return record.workout === workoutId
    })

    if (!record) {
      return {
        status: 404,
        message: "Record not found",
      };
    }

    res.send(record);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getWorkoutRecord,
};
