const express=require('express');
const { request } = require('http');
const router=express.Router();
const { deleteItem } = require('../controllers');

router.delete('/',deleteItem.deleteItem)


module.exports=router;