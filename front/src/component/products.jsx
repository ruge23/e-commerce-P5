import React from 'react';
import { Link } from 'react-router';
import data from './data.js'
import axios from 'axios'
const Product = function(){
    return (
      <div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
            {data.map(function(articulo){
              return (
                <div className="col-lg-4">
                  <div className="thumbnail zambneil">
                    <a href="/producto/{articulo.titulo}"> <img src= { articulo.imagen } className="imagenes"/> </a>
                    <div className="caption">
                     <a href="/producto/{articulo.titulo}"> <h3>{ articulo.titulo }</h3> </a>
                      <p><strong>Precio: </strong>{ articulo.precio }</p>
                      <p><a href="#" className="btn btn-primary glyphicon glyphicon-shopping-cart" role="button"></a> <a href="#" className="btn btn-success" role="button">Comprar</a></p>
                    </div>
                  </div>
                </div>
              )
            })
          }
            </div>
            <div className="col-lg-2"></div>
          </div>
      </div>
    )
}
export default Product;
