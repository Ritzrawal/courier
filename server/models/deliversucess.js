const mongoose=require("mongoose");
const Schema=mongoose.Schema;
let devsucess=new Schema({
    id:{
        type:Number,
    },
    ordernum:{
        type:Number,
    },
    logoffice:{
        type:String,
    },
    date:{
         type:Date,
    },
    orders:{
        type:String,
    },
    amount:{
       type:Number,
        },
    addedby:{
        type:String,
    }
    

    
},{
    collation:"delivery"
})
module.exports=mongoose.model("Delivery",devsucess)
