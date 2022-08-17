const { models: { Seller } } = require('../module');
const { models: { Add } } = require('../module');
const { models: { Category } } = require('../module');
const { models: { City } } = require('../module');
const { models: { Status } } = require('../module');
const { models: { Url } } = require('../module');



module.exports = {

    create: async (req, res) => {
try{

       if ( req.body.topic && req.body.price && req.body.dis && req.body.cityId  && req.body.categoryId && req.body.statusId) {
         
                await Add.create({
                
            topic:req.body.topic,
            price:req.body.price,
            dis:req.body.dis,
            cityId:req.body.cityId,
            sellerId:req.id,
            categoryId:req.body.categoryId,
            statusId:req.body.categoryId
                }).then(result => addId=result.id);
                




await Url.create({
  addid:addId,
  url:req.file.path


})
     
             // res.send(req.file.path);

             res.status(201).json({msg:"item added"});

            }else{
              res.status(404).json({msg:"fill all data"});
            }
        
        


}catch(error){
  res.status(404).json({error});
}
    }
}





