import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const Product = function(props){
    return (
      <div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
            <h2>Productos</h2>
            {props.data.map(function(articulo){
              return (
                <div className="col-lg-4 coxa">
                  <div className="thumbnail zambneil">
                  <div className="cosa">
                      <Link to={ "/producto/" + articulo.titulo}> <img src= { articulo.imagen } className="imagenes"/></Link>
                  </div>
                    <div className="caption">
                     <Link to={ "/producto/" + articulo.titulo}> <strong><h3 className="titulo">{ articulo.titulo }</h3></strong> </Link>
                      <p><strong>Precio: </strong>${ articulo.precio }</p>
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
