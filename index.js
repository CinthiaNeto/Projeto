const express = require('express');;
const app = express();
const path = require('path');

bodyParser = require("body-parser");

var urlencodeParser = bodyParser.urlencoded({extended: false}); 


app.get("/", function(req,res){
    res.sendFile(path.join(__dirname+ "/html/index.html"));
});

app.get("/processa_dados",(req,res)=>{
    res.end("Bem Vindo! "+req.query.nome);
});

app.post("/processa_dados", urlencodeParser,(req,res)=>{
    res.end("Bem Vindo! "+req.body.email);
});

app.listen(process.env.port || 3000);

