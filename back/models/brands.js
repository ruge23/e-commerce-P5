//Módulo declarativo de la Tabla Marcas

module.exports = function (sequelize,DataTypes){
  return sequelize.define('brand',{
    nombre:{type:DataTypes.STRING, allowNull:true}
  });
};
