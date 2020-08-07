const mongoose=require('mongoose');
const express=require("express");
const router =express.Router();
const db = require("../models");
const Pickup=db.pickup;
const User=db.user;
let studentSchema=require("../models/studentdata");
router.route("/api/pickup").post((req,res,next)=>{
    Pickup.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/api/pickup/alllist").get((req,res,next)=>{ 
    Pickup.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.route("/api/alluser").get((req,res,next)=>{ 
    User.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports=router;