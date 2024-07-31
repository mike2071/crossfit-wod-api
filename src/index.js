const express = require('express');
const bodyParser = require('body-parser');

const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(bodyParser.json());
app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});