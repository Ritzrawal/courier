const mongoose=require('mongoose');
const express=require("express");
const router =express.Router();
let studentSchema=require("../models/studentdata");
//  const fs = require('fs');
// router.route('/login').get((req, res)=> {
//     res.render('pages/about');
//  })
router.route("/student-create").post((req,res,next)=>{
    studentSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/student-read").get((req,res,next)=>{ 
    studentSchema.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports=router;