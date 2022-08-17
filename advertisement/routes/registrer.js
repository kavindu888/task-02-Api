const express=require('express');
const { request } = require('http');
const router=express.Router();


const seller = require('../module/seller');
const { insertSeller } = require('../controllers');

// router.post('/',(req,res)=>{
// ;


// })
router.post('/',insertSeller.create);
    




module.exports=router;