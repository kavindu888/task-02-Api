
// const router = require("../routes/addItem");
// const multer = require('multer');








// module.exports=function uplordFile(req,res,next){


//     const storage = multer.diskStorage({
      
//         destination: function (req, file, cb) {
//           cb(null, 'uploard')
//         },
//         filename: function (req, file, cb) {
//           const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
       
//           cb(null, file.fieldname + '-' + uniqueSuffix +file.originalname)
    
//         },
//         fileFilter: (req,file,callback) => {
//             const types = /png|jpg|jpeg|webp|gif|webp|svg/
//             const extName = types.test(path.extname(file.originalname).toLocaleLowerCase())
         
//             const mimetype = types.test(file.mimetype)
//             if(extName && mimetype){
//                 callback(null,true)
//                 next();
//             } else{
//                 cb(new Error("Only supported png,jpeg,jpg,gif,webp and svg format image"))
//             }
//         }
//       })
    
    
      
//       const upload = multer({ 
//         storage:storage
        
//     })

//     upload.single('productImage')
// }