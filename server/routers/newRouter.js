
const express=require("express");
const uirouter =express.Router();
uirouter.route('/login').get((req, res)=> {
    res.render('pages/about');
 })
 uirouter.route('/newlogin').get((req, res)=> {
    res.render('pages/about');
 })
 uirouter.route('/loginpage').get((req, res)=> {
    res.render('pages/about');
 })
 uirouter.route('/loginpagedata').get((req, res)=> {
    res.render('pages/about');
 })
 module.exports=uirouter;