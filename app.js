//jshint esversion-6
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const ejs = require('ejs');
const app = express();

app.use(express.static("public"));
app.use(express.static("images"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.render("index");
});
app.post('/adminlogin',function(req, res){
  res.render("adminlogin");
});
app.post('/adminsignup',function(req, res){
  res.render("adminsignup");
});
app.post('/others',function(req, res){
  res.render("others");
});


app.listen(3000,function(){
  console.log("Server started on port 3000...");
});
