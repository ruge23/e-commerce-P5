import React from 'react';
import Producto from '../component/producto.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreator';

class ProductoContainer extends React.Component {
  render(){
    var index = this.props.products
    .findIndex(products => products.nombre === this.props.params.nombre);

    return(
      <Producto data= {this.props.products[index]} />
    )
  }
};

function mapStateToProps(state){
  return { products: state.products }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductoContainer)
