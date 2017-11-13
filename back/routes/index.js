const express=require('express');
const router = express.Router();
const {Product} = require('../models');

router.get('/products',(req,res)=>{
  Product.findAll().then(data=>{
    res.json(data);
  });
});

router.get('/products/:name',(req,res)=>{
  Product.findOne({where: {nombre:req.params.name}})
    .then(data=>{
      res.json(data);
    });
});

router.post('/products/add',(req,res)=>{
  Product.create({
    nombre: req.body.nombre,
    categoryId: req.body.categoria,
    brandId: req.body.marca,
    precio: req.body.precio,
    descripcion: req.body.descripcion,
    stock: req.body.stock,
    ranking: 0,
    img_url: ''
  });
});

router.put('/products/:name',(req,res)=>{
  //Product.update({where:{name:req.params.name}})
});

module.exports = router;
