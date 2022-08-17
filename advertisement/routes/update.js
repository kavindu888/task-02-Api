const express=require('express');
const { request } = require('http');
const router=express.Router();
const { updateRecord } = require('../controllers');

router.put('/',updateRecord.updateRecord);



module.exports=router;