var express = require("express");
var app = express();

const PORT = process.env.PORT || 3000


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
    console.log(`Server RUNNNNNNING on port ${process.env.PORT}`);
});



