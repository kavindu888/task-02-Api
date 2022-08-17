const jwt=require('jsonwebtoken');
require('dotenv').config()

module.exports=function(req,res,next){

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        const token=req.headers.authorization.split('Bearer ')[1]
        if(token===null){res.sendStatus(401);}else{

            jwt.verify(token,process.env.TOKEN_KEY,(err,id)=>{
                if(err){
                    res.sendStatus(403);
                   
                }else{
                    req.id=id;
                    next();
                }

            });
            
        }
    }else{
        res.sendStatus(401);
    }


}