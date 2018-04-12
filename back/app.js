var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var enviar = require('./utils')
var bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// routes will go here
app.get("/probando",function(req,res){
    res.send("hola")
})

app.post('/mail',function(req,res){
    console.log("llega")
    // chromium-browser --disable-web-security --user-data-dir
    enviar.sendResults(req.body.mail,req.body.text)
})

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
