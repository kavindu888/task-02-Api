module.exports = (sequelize, DataTypes) => {

    const Status = sequelize.define('status', 
    {
        status:DataTypes.STRING
  
    },
    {
        freezeTableName: true,
    
    });

    return Status;

};