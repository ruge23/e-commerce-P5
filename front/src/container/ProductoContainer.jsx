import React from 'react';
import Producto from '../component/producto.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreator';

function mapStateToProps(state, ownProps){
  var index = state.products
  .findIndex(product => product.nombre === ownProps.params.nombre);
  return { data: state.products[index], carrito: state.carrito }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Producto)
