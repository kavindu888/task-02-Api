const express=require('express');
const { request } = require('http');
const { viewItem } = require('../controllers');
const router=express.Router();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');


router.get('/',viewItem.Find);

// const oneDay = 1000 * 60 * 60 * 24;
//  router.use(sessions({
//      secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//      saveUninitialized:true,
//     cookie: { maxAge: oneDay },
//     resave: false 
// }));

module.exports=router;