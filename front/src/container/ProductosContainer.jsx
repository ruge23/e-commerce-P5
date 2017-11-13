import React from 'react';
import Products from '../component/products.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreator';


class ProductosContainer extends React.Component {

  render(){
    console.log('PROPS', this.props)
    return(
        <Products
          data = {this.props.products}
        />
    )
  }
};

function mapStateToProps(state){
  return { products: state.products }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductosContainer);
