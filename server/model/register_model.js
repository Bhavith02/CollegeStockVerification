const mongoose = require("mongoose");

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



module.exports = Register;
