import React from 'react';
import { Link } from 'react-router';
import data from './data.js'

class Producto extends React.Component{
  render(){
    return(
      <div>
      <h1>NAVBARRRRRRRRRRRRRRRRRRRRRRRR</h1>
        <div className='row'>
          <div className='col-lg-12'></div>
        </div>
        <div>
          <div className='row'>
            <div className='col-lg-1'></div>
              <div className='col-lg-5'>
                <img src= {data[0].imagen} id='imagenUnica'/>
              </div>
              <div className='col-lg-5'>
                <h1>{data[0].titulo}</h1>
                <h4>{data[0].precio}</h4>
                  <p><a href="#" className="btn btn-primary glyphicon glyphicon-shopping-cart" role="button"></a> <a href="#" className="btn btn-default" role="button">Comprar</a></p>
              </div>
            <div className='col-lg-1'></div>
          </div>
        </div>
        <div>
        <div className='col-lg-12'></div>
          <div className='row'>
            <div className='col-lg-2'></div>
              <div className='col-lg-8'>
              <h2>Descripcion:</h2>
                  <h4>{data[0].descripcion}</h4>
              </div>
            <div className='col-lg-2'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Producto;
