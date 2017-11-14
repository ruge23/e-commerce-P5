import React from 'react';
import { Link } from 'react-router';

class Producto extends React.Component{
  constructor(props) {
    super(props);
    this.agregarCarrito = this.agregarCarrito.bind(this)
    this.borrarCarrito = this.borrarCarrito.bind(this)
  }

  agregarCarrito(){
    this.props.addCart(this.props.data)
  }

  borrarCarrito(){
   this.props.removeCart(this.props.carrito.findIndex(
     product => product.nombre === this.props.data.nombre))
  }

  render(){
    if(!this.props.data) return (<div>cargando</div>);
    var carrito = this.props.carrito
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
                  <p>
                    {
                      carrito.map(product => product.nombre).includes(this.props.data.nombre)  ?
                      <button
                        onClick = { this.borrarCarrito }
                        >
                        borrado
                      </button>
                      :
                      <button
                        className="btn btn-primary glyphicon glyphicon-shopping-cart" role="button"
                        onClick = { this.agregarCarrito }
                        >
                      </button>
                    }
                  </p>
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
