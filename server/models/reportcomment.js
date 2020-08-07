const mongoose=require('mongoose');
const Schema =mongoose.Schema;
let commentreport= new Schema({
    orderid:{
        type:Number ,
    },
    vendor:{
        type:String,
    },
    addtime:{
    type:Date, 
    default:Date.now,   
    },
    dest:{
        type:String,
    },
    comment:{
        type:String,
    } 

},{
    collection:'comment'
})
module.exports =mongoose.model('Comment',commentreport)