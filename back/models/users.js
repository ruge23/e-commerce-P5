//Módulo declarativo de la Tabla Usuarios

module.exports = function(sequelize,DataTypes){
  return sequelize.define('user',{
    nombre:{type:DataTypes.STRING, allowNull:true},
    email:{type:DataTypes.STRING, allowNull:true},
    password:{type:DataTypes.STRING, allowNull:true},
    rol:{type:DataTypes.BOOLEAN}
  });
};
