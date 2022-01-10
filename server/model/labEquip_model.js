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

var Wquery = Labequip.find({condition:"Working"});
Wquery.count(function (err, count) {
    if (err) console.log(err)
    else {
      var Wcount=count;
      console.log(Wcount);
    }
});
var Rquery = Labequip.find({condition:"Repair"});
Rquery.count(function (err, count) {
    if (err) console.log(err)
    else console.log("Repair Count:", count)
});
var Squery = Labequip.find({condition:"Scrap"});
Squery.count(function (err, count) {
    if (err) console.log(err)
    else console.log("Scrap Count:", count)
});

module.exports = Labequip;
