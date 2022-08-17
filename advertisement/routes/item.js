const express=require('express');
const { request } = require('http');
const router=express.Router();
const { findSellerItem } = require('../controllers');
const { publishItem } = require('../controllers');


router.get('/draft',findSellerItem.Find);
router.get('/publish',publishItem.Find);

module.exports=router;
