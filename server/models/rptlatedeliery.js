const mongoose=require('mongoose');
const Schema =mongoose.Schema;
let latedelivery= new Schema({
    orderid:{
        type:Number,
    },
    cdate:{
        type:Date,
        default:Date.now,
    },
    branch:{
        type:String,  
    },
    dest:{
        type:String,
    }, 
    vendor:{
        type:String,
    },  
    recv:{
        type:String,
    },
    phone:{
        type:Number,
    },
    duration:{
        type:String,
    },
    status:{
        type:String
    }
},{
    collection:'latedelivery'
})
module.exports =mongoose.model('Latedele',latedelivery)