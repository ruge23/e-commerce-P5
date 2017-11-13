import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from './Navbar.jsx';

import {cargarProductos} from '../redux/actions/actionCreator';

function mapDispatchToProps(dispatch){
  return bindActionCreators({cargarProductos}, dispatch);
}

class Main extends React.Component{

  componentDidMount(){
    this.props.cargarProductos()
  }

  render(){
    return(
      <div>
        <Navbar/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
};


export default connect(null, mapDispatchToProps)(Main);
