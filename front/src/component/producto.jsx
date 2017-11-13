import React from 'react';
import { Link } from 'react-router';

class Producto extends React.Component{
  render(){
    console.log("aaa", this.props)
    if(!this.props.data) return (<div>cargando</div>);
    return(
      <div>
        <div className='row'>
          <div className='col-lg-12'></div>
        </div>
        <div>
          <div className='row'>
            <div className='col-lg-1'></div>
              <div className='col-lg-5'>
                <img src= {this.props.data.img_url} id='imagenUnica'/>
              </div>
              <div className='col-lg-5'>
                <h1>{this.props.data.nombre}</h1>
                <h4>${this.props.data.precio}</h4>
                  <p><Link to="#" className="btn btn-primary glyphicon glyphicon-shopping-cart" role="button"></Link> <a href="#" className="btn btn-default" role="button">Comprar</a></p>
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
                  <h4>{this.props.data.descripcion}</h4>
              </div>
            <div className='col-lg-2'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Producto;
