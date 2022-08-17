module.exports = (sequelize, DataTypes) => {

    const City = sequelize.define('city', 
    {
        city:DataTypes.STRING
  
    },
    {
        freezeTableName: true,
    
    });

    return City;

};


