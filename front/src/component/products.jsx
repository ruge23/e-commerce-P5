import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const Product = function(props){
  console.log('props data', props.data)
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
                      <Link to={ "/producto/" + articulo.nombre}> <img src= { articulo.img_url } className="imagenes"/></Link>
                  </div>
                    <div className="caption">
                     <Link to={ "/producto/" + articulo.nombre}> <strong><h3 className="titulo">{ articulo.nombre }</h3></strong> </Link>
                      <p><strong>Precio: </strong>${ articulo.precio }</p>
                      <p><Link to="#" className="btn btn-primary glyphicon glyphicon-shopping-cart" role="button"></Link> <Link to="#" className="btn btn-success" role="button">Comprar</Link></p>
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
