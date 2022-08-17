module.exports = (sequelize, DataTypes) => {

    const Add = sequelize.define('add', 
    {
       topic: DataTypes.STRING,
       price: DataTypes.STRING,
       dis:DataTypes.STRING,
       cityId:DataTypes.INTEGER,
       sellerId:DataTypes.INTEGER,
       categoryId:DataTypes.INTEGER,
       statusId:DataTypes.INTEGER

       

    },
    {
        freezeTableName: true
    });

    return Add;

};