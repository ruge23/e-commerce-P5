const Sequelize = require('sequelize');
const path = require('path');
const db = new Sequelize('postgres://localhost:5432/ecommerce');

//importo las tablas
var Product = db.import(path.join(__dirname,'products'));
var Category = db.import(path.join(__dirname,'categories'));
var Commentary = db.import(path.join(__dirname,'comments'));
var Order = db.import(path.join(__dirname,'orders'));
var Brand = db.import(path.join(__dirname,'brands'));
var User = db.import(path.join(__dirname,'users'));

//-------Relacion entre Categoría-Producto y Marca-Producto------//

//  Esta relación crea un CategoryId en el modelo Product
//  y crea los métodos: getProducts, setProducts, addProducts,
//  addProduct, createProduct, removeProduct, removeProducts,
//  hasProducts, hasProduct y countProducts en el prototipo 
//  de la clase "Category"
Category.hasMany(Product);

//  Esta relación crea un CategoryId en el modelo Product
//  y crea los métodos: getCategory,setCategory y createCategory
//  en el prototipo de la clase "Product"
Product.belongsTo(Category);

Brand.hasMany(Product);

Product.belongsTo(Brand);

//------- Relacion entre productos y ordenes ------//

Product.belongsToMany(Order,{through:'detalle'});

Order.belongsToMany(Product,{through:'detalle'});

//------- Relacion entre Usuarios-ordenes y Usuarios-Comentarios -------//

User.hasMany(Order);

Order.belongsTo(User);

User.hasMany(Commentary);

Commentary.belongsTo(User);

//------- Relación entre Productos-Comentarios -------//

Product.hasMany(Commentary);

Commentary.belongsTo(Product);


module.exports= {db,Product};


