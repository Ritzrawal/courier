const mongoose=require('mongoose');
const Schema =mongoose.Schema;
let returnorder= new Schema({
    sn:{
        type:Number,
    },
    orderid:{
        type:String,
    },

     addtime:{
    type:Date, 
    default:Date.now,   
    },
    comment:{
        type:String,
    }, 
    addedby:{
        type:String,
    },  
},{
    collection:'retunorders'
})
module.exports =mongoose.model('ReturnOrder',returnorder)