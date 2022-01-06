const mongoose = require("mongoose");

const labSchema = new mongoose.Schema({
  lab_id : {type: String, required: true},
  lab_name:{type:String, required:true},
  room_no:{type:String,required:false},
  block: {type:String,required:false},
  floor:{type:String,required:true},
  type:{type:String,required:true}
});
const Lab = mongoose.model("Lab",labSchema);

module.exports = Lab;
