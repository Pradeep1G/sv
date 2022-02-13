
var express = require("express");

var bodyParser = require("body-parser");

var app = express();

var i = 1;

app.use(bodyParser.urlencoded({extended: true}));

console.log("Am I working?");

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    var a1 = req.body.num1;
    var a2 = req.body.num2;

    var a3 = Math.floor(a1/(a2*a2));
    res.send("Your BMI is "+a3);
    console.log(i++);
});

app.get("/contact", function(req, res){
    res.send("Contact me on 7416320648");
})

app.listen(5050);
