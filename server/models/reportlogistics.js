const mongoose=require('mongoose');
const Schema =mongoose.Schema;
let reportlogistics= new Schema({
    name:{
        type:String,
    },
    phone:{
        type:Number,
    },

    lastpay:{
        type:String,  
    },
    pendcorder:{
        type:String,
    }, 
    prndcoll:{
        type:String,
    },  
    pendliv:{
        type:String,
    } 
},{
    collection:'reptlogst'
})
module.exports =mongoose.model('ReportLogistics',reportlogistics)