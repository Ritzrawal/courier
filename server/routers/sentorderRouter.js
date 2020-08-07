const mongoose=require('mongoose');
const express=require("express");
const router =express.Router();
const db = require("../models");
const SentOrder=db.sentorder;
const Delivery=db.delisucess;
router.route("/api/sentorder").post((req,res,next)=>{
    SentOrder.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/api/sentorder/list").get((req,res,next)=>{ 
    SentOrder.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//delivery sucess Api data 

router.route("/api/delivery/sucess").post((req,res,next)=>{
    Delivery.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/api/delivery/sucess").get((req,res,next)=>{ 
    Delivery.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports=router;