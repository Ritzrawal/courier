const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.newuser=require('./userModel')
db.user = require('./user');
db.rtvsent=require("./orderrtvsent");
db.pickup=require('./pickup');
db.sentorder=require('./sentorder');
db.order=require("./orders");
db.student=require('./newstudents');    
db.role = require("./roles");
db.comment=require("./reportcomment");
db.returorder=require("./orderReturn");
db.delisucess=require("./deliversucess");
db.reportlogist=require("./reportlogistics");
db.payments=require("./payments");
db.latedele=require("./rptlatedeliery");
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;