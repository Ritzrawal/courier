const mongoose=require('mongoose');
const Schema =mongoose.Schema;
let pickup= new Schema({
    pickupId:{
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
    addedby:{
        type:String,
    } 

},{
    collection:'pickup'
})
module.exports =mongoose.model('Pickup',pickup)