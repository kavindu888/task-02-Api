module.exports = (sequelize, DataTypes) => {

    const Category = sequelize.define('category', 
    {
       category: DataTypes.STRING,
  
    },
    {
        freezeTableName: true
    });

    return Category;

};