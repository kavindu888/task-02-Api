const { models: { Seller } } = require('../module');
const { models: { Add } } = require('../module');
const { models: { Category } } = require('../module');
const { models: { City } } = require('../module');
const { models: { Status } } = require('../module');
const { models: { Url } } = require('../module');

    
module.exports = {

    Find: async (req, res) => {
        
        try{
        
        let status = await Status.findOne({
            attributes: ['id'],
            where: {
                status: "publish"
             
            
              }


        });


        let findAll = await Url.findAll({
            attributes: ['url'],
         include: [{
            
            model: Add,
            
            required: true,


            include: [{
                model: City,
                attributes: ['city'],
                required: true
               },{
                 
                    model: Category,
                    attributes: ['category'],
                    required: true
                 
                   }],
                   where: {
                    sellerId: req.id,
                    statusId:status.id
    
                 
                
                  },
                  //  order: [ [ 'createdAt', 'DESC' ]]

                }],
              
            
            
             
    });
    if(findAll==null){
        res.send({msg:"somthing went wrong"})
    }else{
    res.send({findAll});
    }
}catch(error){
    res.status(404).json({error});
}
    }
}