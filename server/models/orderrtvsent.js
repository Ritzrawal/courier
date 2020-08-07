const mongoose=require("mongoose");
const Schema=mongoose.Schema;
let orderrt=new Schema({
    id:{
        type:Number,
    },
    vendor:{
        type:String,
    },
    logoffice:{
        type:String,
    },
    date:{
         type:Date,
    },
    orders:{
        type:String,
    }

    
},{
    collation:"ordersrtv"
})
module.exports=mongoose.model("Ordersrtv",orderrt)
