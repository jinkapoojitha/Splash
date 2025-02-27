
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_DB_CONNECTION)
.then(()=>{
    console.log("Database connected")
})
.catch((err)=>{
    console.log("Failed"+err)
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection;
