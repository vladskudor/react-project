let express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
});

const exercise = [
    {
        day: 1,
        nameTraining: 'bench press',
        numberOfSets: 3,
        numberOfRepetitions: 10,
    },
    {
        day: 2,
        nameTraining: 'thrust of the vertical block',
        numberOfSets: 3,
        numberOfRepetitions: 10,
    },
    {
        day: 3,
        nameTraining: 'standing barbell press',
        numberOfSets: 3,
        numberOfRepetitions: 10,
    },
    {
        day: 4,
        nameTraining: 'triceps pull block',
        numberOfSets: 3,
        numberOfRepetitions: 10,
    },
    {
        day: 5,
        nameTraining: 'barbell triceps lift',
        numberOfSets: 3,
        numberOfRepetitions: 10,
    },
    {
        day: 6,
        nameTraining: 'hyperextension',
        numberOfSets: 3,
        numberOfRepetitions: 10,
    },
    {
        day: 7,
        nameTraining: 'barbell squats',
        numberOfSets: 3,
        numberOfRepetitions: 10,
    },
    {
        day: 8,
        nameTraining: 'leg compressions in the gym',
        numberOfSets: 3,
        numberOfRepetitions: 10,
    },
    {
        day: 9,
        nameTraining: 'rise to',
        numberOfSets: 3,
        numberOfRepetitions: '10-12',
    },
    {
        day: 10,
        nameTraining: 'press',
        numberOfSets: 3,
        numberOfRepetitions: '10-15',
    }
];

app.get("/exercises", function(req, res){
    res.send(exercise)
});

app.listen(4000, function(){
    console.log("The server is waiting for a connection...");
});