const mongoose=require('mongoose');
const Schema =mongoose.Schema;
let orders= new Schema({
    sn:{
        type:Number,

    },
    orderid:{
        type:String,
    },
   brach:{
       type:String,
   },
     datesent:{
    type:Date, 
    default:Date.now,   
    },
    sender:{
        type:String,
    },
    reciver:{
        type:String,
    },
    phonnum:{
        type:Number,
    },
    address:{
        type:String,
    },
    destbranch:{
        type:String,
    },
    status:{
        type:String,
    }
},{
    collection:'orders'
})
module.exports =mongoose.model('Orders',orders)