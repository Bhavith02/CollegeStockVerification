const mongoose = require("mongoose");
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({path:'config.env'})
let DB_URL = process.env.DB_URL;

const connectDB = async()=>{
  try{
    const con = await mongoose.connect(DB_URL,
      {useNewUrlParser:true},{useUnifiedTopology:true}
    );
    console.log(`MongoDB connected : ${con.connection.host}`);
  }catch(err){
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;
