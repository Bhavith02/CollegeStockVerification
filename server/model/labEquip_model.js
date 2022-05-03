const mongoose = require("mongoose");

const labequipSchema = new mongoose.Schema({
  lab_name:{type: String, required: true},
  lab_id : {type: String, required: true},
  item_name:{type:String, required:true},
  company_name:{type:String,required:false},
  model_no: {type:String,required:false},
  doi : { type: String},
  condition:{type:String,required:true}
});


const Labequip = mongoose.model("Labequip",labequipSchema);
//
// const laboverviewSchema = new mongoose.Schema({
//   item_Name:{type:String},
//   lab_ID:[{type:mongoose.Schema.Types.ObjectID,ref:'Labequip'}]
// });
// const Laboverview = mongoose.model("Laboverview",laboverviewSchema);
// Labequip.find({item_name:{$in:["computer","printer"]}},function(err,data){
//   console.log(data);
// })
//
// const pipeline = Labequip.aggregate([{$match:{condition:"Working"}},{$group:{_id:"$item_name",count:{$sum:1}}},{$sort:{count:-1}}]);
// console.log(pipeline);

// Labequip.find({item_name:{$in:[Labequip.find().distinct('item_name',function(err,data)]}},function(err,data){
//   console.log(data);
// })
// Labequip.aggregate([{$sortByCount:"$item_name"|function(err,data3){
//   console.log(data3);
// }}]);
const getDocument = async () =>{
  try{
    const result = await Labequip.find().distinct('item_name')
    result.forEach(res =>{
       Labequip.aggregate([{$match:{item_name:res}},{$group:{_id:"$condition",count:{$sum:1}}},{$sort:{count:-1}}],function(err,data){
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
// Labequip.find().distinct('item_name',function(err,data1){
//   console.log(data1);
//   Labequip.find({item_name:{$in:data1}},{item_name:1,_id:0},function(err,data2){
//     console.log(data2);
//   });
// });

var Wquery = Labequip.find({condition:"Working"});
Wquery.count(function (err, count) {
    if (err) console.log(err)
    else {
      var Wcount=count;
      console.log("LE Working count:",Wcount);
    }
});
var Rquery = Labequip.find({condition:"Repair"});
Rquery.count(function (err, count) {
    if (err) console.log(err)
    else console.log("LE Repair Count:", count)
});
var Squery = Labequip.find({condition:"Scrap"});
Squery.count(function (err, count) {
    if (err) console.log(err)
    else console.log("LE Scrap Count:", count)
});

module.exports = Labequip;
// module.exports = Laboverview;
