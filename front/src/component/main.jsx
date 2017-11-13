import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

function Main (props){
  return(
    <div>
      <h1>Aca va el navibari</h1>
      {React.cloneElement(props.children, props)}
    </div>
  )
}

export default Main;
