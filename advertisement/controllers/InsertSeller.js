const { models: { Seller } } = require('../module');


module.exports = {

    create: async (req, res) => {

        try{

        if ( req.body.first_name && req.body.last_name && req.body.user_name && req.body.email && req.body.password && req.body.contact_no && req.body.discription) {
            const { first_name, last_name,user_name, email,password,contact_no,discription} = req.body;
        

            let sell = await Seller.findOne({
                where: {
                   email: req.body.email
                
                  }
            
            });

            if(sell===null){
                      
             




             await Seller.create({
                
                first_name,
                 last_name,
                 user_name,
                 email,
                 password,
                 contact_no,
                 discription
                     });
                   
        
                   res.status(201).json({msg:"success.user registerd"});
              
                    
                }else{
                
             
                  res.status(303).json({msg:"error.user arly registerd plese login"});
              
                
          
        }
         
         } else {
             res.status(400).json({msg:"Error.Data not Complete"});
         }

    
    }catch(error){
        res.status(400).send(error);
    }
} 

}


