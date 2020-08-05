const mongoose=require('mongoose');
const Schema =mongoose.Schema;
let studentdataSchema= new Schema({
    name:{
        type:String,

    },
    rollono:{
        type:String,
    },
     email:{
    type:String,
},
},{
    collection:'students'
})
module.exports =mongoose.model('Students',studentdataSchema)