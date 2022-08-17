const { INTEGER } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

    const Seller = sequelize.define('seller', 
    {
      // seller_id:DataTypes.INTEGER,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        contact_no: DataTypes.STRING,
        discription: DataTypes.STRING  

    },
    {
        freezeTableName: true ,
        //timeStams:false
    });

    return Seller;

};