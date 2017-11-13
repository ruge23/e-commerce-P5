//Módulo deflacarito de la Tabla Categorías

module.exports = function (sequelize,DataTypes){
  return sequelize.define('category',{
    nombre:{type:DataTypes.STRING, allowNull:true}
  });
};
