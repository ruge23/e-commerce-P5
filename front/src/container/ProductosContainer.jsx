import React from 'react';
import Products from '../component/products.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreator';

function mapStateToProps(state){
  return { data: state.products }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
