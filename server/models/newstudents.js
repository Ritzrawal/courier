const mongoose=require('mongoose');
const Schema =mongoose.Schema;
let newstudentdataSchema= new Schema({
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
    collection:'studentsdata'
})
module.exports =mongoose.model('Newstudents',newstudentdataSchema)