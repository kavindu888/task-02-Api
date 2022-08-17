const express=require('express');
const app=express();
const registrer=require('./routes/registrer');
const login=require('../advertisement/routes/login')
const loginAuth=require('./controllers/loginAuth');
const additem=require('../advertisement/routes/addItem');
const db=require('../advertisement/module');
const auth =require('../advertisement/middleware/auth');

const seller=require('./routes/item');
const allItems=require('./routes/allitems');
const viewItem=require('./routes/viewItem');
const deleteRecord=require('./routes/delete')
const updateRecord=require('./routes/update');
const imageupdate=require('./routes/imageUpdate')


const { search } = require('./routes/registrer');

app.use(express.static('public'))
app.use('/uploard', express.static('uploard'))

app.use(express.json());
app.use('/api/registrer',registrer);
app.use('/api/login',login);
app.use('/api/addItem',auth,additem);
app.use('/api/sellerItem',auth,seller);
app.use('/api/allItems',allItems);
app.use('/api/view',viewItem);
app.use('/api/delete',auth,deleteRecord);
app.use('/api/update',auth,updateRecord);
app.use('/api/imageUpdate',auth,imageupdate);








//const port=process.env.PORT || 3000;
(async () => {
    console.log("acyncronize");
    await db.sequelize.sync();
    
})();




app.listen(4000);







