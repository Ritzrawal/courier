const mongoose=require('mongoose');
const express=require("express");
const router =express.Router();
const db = require("../models");
const Orders=db.order;
const OrderReturn=db.returorder;
const Rtvsent=db.rtvsent;
router.route("/api/orders").post((req,res,next)=>{
    Orders.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/api/orders").get((req,res,next)=>{ 
    Orders.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.route("/api/orders/return").post((req,res,next)=>{
    OrderReturn.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/api/orders/return").get((req,res,next)=>{ 
    OrderReturn.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
router.route("/api/orders/return/sent").post((req,res,next)=>{
    Rtvsent.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/api/orders/return/sent").get((req,res,next)=>{ 
    Rtvsent.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports=router;