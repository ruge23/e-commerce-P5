const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');
const routes = require('./routes');
const crossDomain = require('./config').crossDomain;

var app = express();
app.use(crossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',routes);

//require('./src/routes/userRoutes')(app);

models.db.sync({force:true})
  .then(()=>{
    app.listen(3000,()=>{
    console.log('Servidor de Backed en puerto 3000');
    });
    models.Product.create({
      nombre:'Remera',
      precio:200.70,
      descripcion:'Remera Adidas lisa',
      stock:23,
      ranking:23.3,
      img_url:'https://www.sporting.com.ar/media/product/893/remera-adidas-oz-l-000-398.jpg'
    });
    models.Product.create({
      nombre:'Short',
      precio:250.00,
      descripcion:'Pantalon corto deportivo Adidas',
      stock:30,
      ranking:20.0,
      img_url:'https://petersport.gr/PRImages/ProductPhotosXL/9336_Codes_LL1.jpg'
    });
    models.Product.create({
      nombre:'Camisa',
      precio:1200.50,
      descripcion:'Camisa mangas largas color celeste claro',
      stock:13,
      ranking:80.3,
      img_url:'https://www.beststyleoutlet.com/5041-thickbox_default/camisa-lacoste-live-azul-celeste-ref12006.jpg'
    });

  })
  .catch(err=>{
    console.error('se produjo un error con la DB: ',err);
  });
