import React from 'react';
import Producto from '../component/producto.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreator';

// class ProductoContainer extends React.Component {
//   // render(){
//   //   var index = this.props.products
//   //   .findIndex(product => product.nombre === this.props.params.nombre);
//
//     return(
//       <Producto data= {this.props.products} />
//     )
//   }
// };

function mapStateToProps(state, ownProps){
  var index = state.products
  .findIndex(product => product.nombre === ownProps.params.nombre);
  return { data: state.products[index] }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Producto)
