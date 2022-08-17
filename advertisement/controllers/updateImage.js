const { models: { Url } } = require('../module');



module.exports = {
 

    updateImage: async (req, res) => {
        
if(req.file){
    try{
            Url.update({ url :req.file.path  },{ where : { id : req.body.id }});
          
            

        }catch(error){
            res.status(404).json(error);
        }
        res.send({url:'image updated'})
    }else{
        res.send({msg:"no image file"})
    }
    

}
}