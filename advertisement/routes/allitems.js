const express=require('express');
const { request } = require('http');
const router=express.Router();
const { allItems } = require('../controllers');
const { searchItems } = require('../controllers');


router.get('/all',allItems.Find);
router.get('/search',searchItems.Find);




module.exports=router;