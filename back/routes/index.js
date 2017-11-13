const express=require('express');
const router = express.Router();
const {Product} = require('../models');

router.get('/products',(req,res)=>{
  Product.findAll().then((data)=>{
    res.json(data);
  });
});

module.exports = router;
