const add = require("./add");

module.exports = (sequelize, DataTypes) => {

    const Url = sequelize.define('url', 
    {
        url:DataTypes.STRING,
        addid:DataTypes.INTEGER
  
    },
    {
        freezeTableName: true,
        
    
    });

    return Url;

};