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
const registerSchema = new mongoose.Schema({
  first_name:{ type : String, required : true, max : [127, "Max Length is 127 characters"]},
  last_name:{ type : String, required : true, max : [127, "Max Length is 127 characters"]},
  Designation:{type:String},
  Admin_id:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  contact:{type:Number}
});

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
app.get('/admindetails',function(req, res){
  Register.find({},function(err,admins){
    res.render("admindetails",{
      adminlist:admins
    });
  });
});
app.post('/adminsignup',function(req, res){
  const newRegister = new Register({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    Designation: req.body.Designation,
    email: req.body.email,
    password: req.body.password,
    confirm_password: req.body.password,
    Admin_id: req.body.Admin_id,
    contact_no: req.body.contact_no
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
