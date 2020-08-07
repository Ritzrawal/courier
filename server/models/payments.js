const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const payments=new Schema({
    profile:{
        type:String,
    },
    user:{
        type:String,
    },
    notes:{
        type:String,
    },
    addedby:{
        type:String,
    },
    status:{
        type:String,
    },
    addedtime:{
        type:Date,
        default:Date.now
    },   
},{
    collection:'payments'
})
module.exports=mongoose.model("Payments",payments)