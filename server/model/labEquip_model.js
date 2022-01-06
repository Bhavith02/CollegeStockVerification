const mongoose = require("mongoose");

const labequipSchema = new mongoose.Schema({
  lab_id : {type: String, required: true},
  item_name:{type:String, required:true},
  company_name:{type:String,required:false},
  model_no: {type:String,required:false},
  doi : {type:String,required:true},
  condition:{type:String,required:true}
});
const Labequip = mongoose.model("Labequip",labequipSchema);

module.exports = Labequip;
