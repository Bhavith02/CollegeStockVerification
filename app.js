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

mongoose.connect("mongodb://localhost:27017/stockDB",
  {useNewUrlParser:true},{useUnifiedTopology:true}
);
const registerSchema = {
  first_name:String,
  last_name:String,
  Designation:String,
  AdminID:String,
  email:String,
  password:String,
  contact:Number
};

const Register = mongoose.model("Register",registerSchema);

app.get('/', function(req, res){
  res.render("index");
});
app.get('/adminlogin',function(req, res){
  res.render("adminlogin");
});
app.get('/adminsignup',function(req, res){
  res.render("adminsignup");
});
app.get('/others',function(req, res){
  res.render("others");
});
app.post('/adminsignup',function(req, res){
  const newRegister = new Register({
    email: req.body.email,
    password: req.body.password
  });
  newRegister.save(function (err){
    if (err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  });
});

app.post('/adminlogin', function(req, res) {
  const username = req.body.email;
  const password = req.body.password;

  Register.findOne({email:username},function(err,foundUser){
    if (err){
      console.log(err);
    }else{
      if(foundUser){
        if(foundUser.password === password){
          res.render("navigation");
        }
      }
    }
  });
});





app.listen(3000,function(){
  console.log("Server started on port 3000...");
});
