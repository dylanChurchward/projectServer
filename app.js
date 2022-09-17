var express = require("express");
var app = express();

const PORT = process.env.PORT || 3000

const {Client} = require('pg');

const client = new Client({
    user: 'qphcrsbmppjysd',
    host: 'ec2-18-208-55-135.compute-1.amazonaws.com',
    database: 'db115kej9va1fg',
    password: 'bd04f9ef256656c56768d5d604991e7da483261356b789733c51a27ed5652e89',
    port: 5432,
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
})

client.connect(function(err) {
    if (err) throw err;
    console.log('connected');
});


// *************************************************************************************************
//                                             Resources for convert values project

// convert celcius to fahrenheit microservice
app.get('/celciusToFahrenheit/:num', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // this line allows the local server to work properly while using "live server"
    var result = (Number(req.params.num) * 1.8) + 32
    res.json({"result": result});
});

// convert fahrenheit to celcius microservice
app.get('/fahrenheitToCelcius/:num', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // this line allows the local server to work properly while using "live server"
    var result = (Number(req.params.num) - 32) * (5/9)
    res.json({"result": result});
});

// convert centimeters to inches microservice
app.get('/centimetersToInches/:num', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // this line allows the local server to work properly while using "live server"
    var result = Number(req.params.num) / 2.54
    res.json({"result": result});
});

// convert inches to centimeters microservice
app.get('/inchesToCentimeters/:num', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // this line allows the local server to work properly while using "live server"
    var result = Number(req.params.num) * 2.54
    res.json({"result": result});
});

// convert pounds to kilograms microservice
app.get('/poundsToKilograms/:num', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // this line allows the local server to work properly while using "live server"
    var result = Number(req.params.num) * 0.45359237
    res.json({"result": result});
});

// convert kilograms to pounds microservice
app.get('/kilogramsToPounds/:num', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // this line allows the local server to work properly while using "live server"
    var result = Number(req.params.num) * 2.2
    res.json({"result": result});
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});


// *************************************************************************************************
//                                Resources for 2048 clone project

// Get all entries from the leader board
app.get('/getLeaderboard', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // this line allows the local server to work properly while using "live server"

    client.query(`SELECT * FROM leaderboard`, (err, response) => {
        res.json(response.rows);
        client.end;
    })

});

// Add a new record to leader board database 
app.get('/putLeaderboard/:playername/:score', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // this line allows the local server to work properly while using "live server"

    client.query(`INSERT INTO leaderboard(playerName, score) VALUES (${req.params.playername}, ${req.params.score})`);
    client.query(`SELECT * FROM leaderboard`, (err, response) => {
        res.json(response.rows);
        client.end;
    })

});






