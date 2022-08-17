const express=require('express');
const { request } = require('http');
const router=express.Router();
const { models: { Seller } } = require('../module');
const { insertAdd } = require('../controllers');
const uploardFile=require('../middleware/fileUploard')

const multer = require('multer');
  
      const storage = multer.diskStorage({
        
          destination: function (req, file, cb) {
            cb(null, 'uploard')
          },
          filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
         
           
            cb(null, file.fieldname + '-' + uniqueSuffix +file.originalname)
            req.file=(file.fieldname + '-' + uniqueSuffix +file.originalname);
            
      
          },
        
        })
      
      
        
        const upload = multer({ 
          storage:storage
          
      })
  

  





 router.post('/',upload.single('productImage'),insertAdd.create);


 module.exports=router;