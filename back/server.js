const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');
const routes = require('./routes');

var app = express();
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
      nombre:'Remera lisa',
      precio:200.70,
      descripcion:'Remera Adidas lisa',
      stock:23,
      ranking:23.3,
      img_url:'https://www.sporting.com.ar/media/product/893/remera-adidas-oz-l-000-398.jpg'
    });
  })
  .catch(err=>{
    console.error('se produjo un error con la DB: ',err);
  });
