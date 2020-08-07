const mongoose=require('mongoose');
const express=require("express");
const router =express.Router();
const db = require("../models");
const ReportLogi=db.reportlogist;
const LateDelivery=db.latedele;
const CommentData=db.comment;
const Payments=db.payments;
router.route("/api/report/logistics").post((req,res,next)=>{
    ReportLogi.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/api/report/logistics").get((req,res,next)=>{ 
    ReportLogi.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

//late delivery  api data 

router.route("/api/report/delivery").post((req,res,next)=>{
    LateDelivery.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/api/report/delivery").get((req,res,next)=>{ 
    LateDelivery.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
//report for comments 
router.route("/api/reports/comments").post((req,res,next)=>{
    CommentData.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/api/reports/comments").get((req,res,next)=>{ 
    CommentData.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})
//payments  reversre
router.route("/api/payments/details").post((req,res,next)=>{
    Payments.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)   
            res.json(data)
        } 
    })
})
router.route("/api/payments/details").get((req,res,next)=>{ 
    Payments.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})


module.exports=router;