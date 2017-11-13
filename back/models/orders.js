//Módulo declarativo de la Tabla Ordenes

//La clave foránea UserId se crea automáticamente al estableer la
//relación en el inde.js de ('./models')

module.exports = function (sequelize,DataTypes){
  return sequelize.define('order',{
    estado:{type:DataTypes.BOOLEAN, defaulValue:false}
  });
};
