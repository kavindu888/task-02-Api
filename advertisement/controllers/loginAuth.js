const { models: { Seller } } = require('../module');
const jwt=require('jsonwebtoken');
require('dotenv').config()






module.exports= {


findSeller: async (req,res) =>{
try{
    
    if(req.body.email && req.body.password){

let sell = await Seller.findOne({
    attributes: ['id'],
    where: {
       email: req.body.email,
       password:req.body.password
    
      }

});
if(sell===null){
    res.status(404).json({msg:'invalid user name or password check again'});
    
}else{

  
  const token=jwt.sign(sell.id,process.env.TOKEN_KEY);
  //'Our websites require some cookies to function properly'
  res.status(200).json({token});

}
}else{
    res.status(204).json({msg:"error.fill all data"})
}


}catch(error){
    res.status(404).json(error)
}
}
}
