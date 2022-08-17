const { models: { Seller } } = require('../module');
const { models: { Add } } = require('../module');
const { models: { Category } } = require('../module');
const { models: { City } } = require('../module');
const { models: { Status } } = require('../module');
const { models: { Url } } = require('../module');

module.exports = {

    updateRecord: async (req, res) => {
        try{
        let status ="";

        if(req.body.cityId){   
           {
            Add.update({ cityId :req.body.cityId},{ where : { id : req.body.id }});
            status="city updated," +" ";
            }

        }


        if(req.body.topic){
            Add.update({ topic :req.body.topic  },{ where : { id : req.body.id }});
            status=status+" "+"topic updated," +" ";


        }

        if(req.body.price){
            Add.update({ price :req.body.price  },{ where : { id : req.body.id }});
            status=status+" "+"price updated," +" ";


        }

        if(req.body.dis){
            Add.update({ price :req.body.dis  },{ where : { id : req.body.id }});
            status=status+" "+"discription updated," +" ";


        }
     

    if(req.body.categoryId){
     {
        Add.update({ categoryId :req.body.categoryId  },{ where : { id : req.body.id }});
        status= "category updated,"+" " +status;
        }
        

    }
    if(req.body.statusId){
        {
           Add.update({ statusId :req.body.statusId  },{ where : { id : req.body.id }});
           status= "status updated,"+" " +status;
           }
           
   
       }


    

    res.send({msg:status})


    }catch(error){
        res.status(404).json(error);
    }
}
 

   


}
