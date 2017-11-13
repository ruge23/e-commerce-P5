import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Navbar from './Navbar.jsx'


function Main (props){
  return(
    <div>
      <Navbar/>
      {React.cloneElement(props.children, props)}
    </div>
  )
}

export default Main;
