const dbConfig = require('../config/db-config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port:3307
});

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Seller = require('./seller')(sequelize, Sequelize.DataTypes);
db.models.City = require('./city')(sequelize,Sequelize.DataTypes);
db.models.Category = require('./category')(sequelize,Sequelize.DataTypes);
db.models.Status = require('./status')(sequelize,Sequelize.DataTypes);
db.models.Url = require('./url')(sequelize,Sequelize.DataTypes);
db.models.Add = require('./add')(sequelize,Sequelize.DataTypes);

db.models.Add.hasMany(db.models.Url);
db.models.Url.belongsTo(db.models.Add);

db.models.City.hasMany(db.models.Add);
db.models.Add.belongsTo(db.models.City);

db.models.Seller.hasMany(db.models.Add);
db.models.Add.belongsTo(db.models.Seller);

db.models.Category.hasMany(db.models.Add);
db.models.Add.belongsTo(db.models.Category);

db.models.Status.hasMany(db.models.Add);
db.models.Add.belongsTo(db.models.Status);






// db.Add.hasMeny(db.Url,{
//     foreignKey:'add_id',
//     as:'url'
// })
// db.Url.belongTo(db.Add,{
//     foreignKey:'add_id',
//     as:'add'
// })
module.exports = db;

