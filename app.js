//jshint esversion-6
const express = require('express');
const bodyParser = require("body-parser");
const ejs = require('ejs');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./server/database/connection');
const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

//log request
app.use(morgan('tiny'));

//mongoDB connection
connectDB();

//loading assets
app.use('/css',express.static(path.resolve(__dirname,"public/css")));
app.use('/images',express.static(path.resolve(__dirname,"public/images")));
app.use('/js',express.static(path.resolve(__dirname,"public/js")));

//setting view engine and specifying ejs template
app.set('view engine', 'ejs');

//parsing request to bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//load routers
app.use('/',require('./server/routes/router'));



app.listen(PORT,function(){
  console.log(`Server started on Port ${PORT}`);
});
