//Módulo declarativo de la Tabla Comentarios

//Las claves foráneas de ProductsId y UserId se crean automáticamente
//al realizar la relación en el archivo index.js de ('./models')

module.exports = function(sequelize,DataTypes){
  return sequelize.define('commentary',{
    descripcion:{type:DataTypes.STRING, allowNull:true}
  });
};
