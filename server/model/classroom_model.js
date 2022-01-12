const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  class_id : {type: String, required: true},
  room_no:{type:String,required:true},
  block: {type:String,required:true},
  branch: {type:String,required:true},
  floor:{type:String,required:true},
  type:{type:String,required:true}
});
const Class = mongoose.model("Class",classSchema);

module.exports = Class;
