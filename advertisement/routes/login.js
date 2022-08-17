const express=require('express');
const { request } = require('http');
const router=express.Router();
const { loginAuth } = require('../controllers');

module.exports=router;


router.post('/',loginAuth.findSeller)
module.exports=router;
