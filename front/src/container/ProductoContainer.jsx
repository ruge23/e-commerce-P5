import React from 'react';
import Producto from '../component/producto.jsx';
import data from '../component/data.js'

class ProductoContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      producto : null,
    }
  };

  componentDidMount () {
    function nombre(producto){
      return producto.titulo === this.props.params.nombre
    }
    this.setState({ producto : data[data.findIndex(nombre.bind(this))] })
  };


  render(){
    console.log(this.state.producto)
        return(
        <Producto
          data= {this.state.producto}
        />
    )
  }
};

export default ProductoContainer
