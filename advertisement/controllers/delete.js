const { models: { Add } } = require('../module');



module.exports = {

    deleteItem: async (req, res) => {

        if(req.body.id){
            await Add.destroy({

                where: {
                  id: req.body.id
                },
                force: true
              });
              res.send({msg:'item deleted'})
        }else{
            res.send({msg:'insert item id'})
        }
    
    
    }
}

