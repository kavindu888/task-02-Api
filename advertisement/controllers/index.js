const controllers = {};

controllers.insertSeller = require('./InsertSeller');
controllers.insertAdd = require('./insertAdd');
controllers.findSellerItem = require('./sellerItems');
controllers.publishItem = require('./publishItem');
controllers.allItems = require('./allItems');
controllers.searchItems = require('./searchItems');
controllers.viewItem = require('./viewItem');
controllers.deleteItem = require('./delete');
controllers.updateRecord = require('./update');
controllers.updateImage = require('./updateImage');
controllers.loginAuth = require('./loginAuth');




module.exports = controllers;