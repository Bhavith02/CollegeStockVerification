const mongoose = require("mongoose");

const classEquipSchema = new mongoose.Schema({
  class_id : {type: String, required:true},
  room_no : {type: String, required: true},
  item_name:{type:String, required:true},
  company_name:{type:String,required:false},
  model_no: {type:String,required:false},
  doi : {type:String,required:true},
  condition:{type:String,required:true}
});
const Classequip = mongoose.model("Classequip",classEquipSchema);


const getDocument = async () =>{
  try{
    const result = await Classequip.find().distinct('item_name')
    result.forEach(res =>{
       Classequip.aggregate([{$match:{item_name:res}},{$group:{_id:"$condition",count:{$sum:1}}},{$sort:{count:-1}}],function(err,data){
        console.log(data);
      })
    })
    console.log(result);
    // const result1 = await Labequip.find({item_name:"computer"})
    // console.log(result1);

  }catch(err){
    console.log(err);
  }
}

getDocument();


var Wquery = Classequip.find({condition:"Working"});
Wquery.count(function (err, count) {
    if (err) console.log(err)
    else {
      var Wcount=count;
      console.log("CE Working count:",Wcount);
    }
});
var Rquery = Classequip.find({condition:"Repair"});
Rquery.count(function (err, count) {
    if (err) console.log(err)
    else console.log("CE Repair Count:", count)
});
var Squery = Classequip.find({condition:"Scrap"});
Squery.count(function (err, count) {
    if (err) console.log(err)
    else console.log("CE Scrap Count:", count)
});

module.exports = Classequip;
