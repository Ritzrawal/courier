const mongoose=require('mongoose');
const Schema =mongoose.Schema;
let sentorder= new Schema({
    sdId:{
        type:String,

    },
    logofficer:{
        type:String,
    },
     datesent:{
    type:Date, 
    default:Date.now,   
    },
    orders:{
        type:String,
    },

},{
    collection:'sentorder'
})
module.exports =mongoose.model('SentOrder',sentorder)   