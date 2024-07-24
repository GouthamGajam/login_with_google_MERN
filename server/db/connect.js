const mongoose = require("mongoose");

const DB = process.env.DB;

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected")).catch((err)=>console.log("err",err))