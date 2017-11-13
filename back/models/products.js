//Módulo declarativo de la Tabla Productos

//Las claves foráneas de CategoryId y BrandId se crean
//automáticamente al realizar la relación en el archivo
//index.js de ('./models')

module.exports =(sequelize,DataTypes)=>{
  return sequelize.define('product',{
  nombre:{ type:DataTypes.STRING, allowNull: false },
  precio:{type:DataTypes.REAL, allowNull:false},
  descripcion:{type:DataTypes.STRING},
  stock:{type:DataTypes.INTEGER, allowNull:false},
  ranking:{type:DataTypes.REAL},
  img_url:{type:DataTypes.STRING}
});

};
