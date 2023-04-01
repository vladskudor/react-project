let express = require('express');
let MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');

mongoClient = new MongoClient('mongodb://localhost:27017/');

let dbClient;

const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();
});

mongoClient.connect((err , client) => {
    if(err) console.log(err);
    dbClient = client;
    app.locals.collection = client.db('reactDataBase').collection('reactDb');
    app.listen(9000, () => {
        console.log('Connected to data base!');
    })
});

const exercises = [
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
    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, exercise){
        if(err) return console.log(err);
        res.send(exercise)
    });
});

app.post("/exercises", function (req, res) {

    if(!req.body) return res.sendStatus(400);
  
    const exerciseValue = req.body;
  
    // const exercise = {
    //     nameExercise: exerciseValue
    // };

    const collection = req.app.locals.collection;
    collection.insertOne(exerciseValue, function(err, result){
      if(err) return console.log(err);
      res.send(exerciseValue);
    });
  });

app.put(`/exercises` , function(req, res){
    if(!req.body) return res.sendStatus(400);
    const id = new objectId(req._id);
    const userEmail = req.body.body.email;
    const userPassword = req.body.password;

    const weightOfUser = req.body.body.weight;

    console.log(weightOfUser);
    const collection = req.app.locals.collection;
    collection.findOneAndUpdate({/*_id: id*/ email: userEmail , password: userEmail}, { $set: {weight: weightOfUser}},
        {returnOriginal: false }, function(err, result){
            if(err) return console.log(err);
            res.send(result);
        });
});

process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
  });
  