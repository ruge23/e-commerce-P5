import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreator';

import RegisterForm from '../component/register.jsx';

class Register extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        nombre: '',
        email: '',
        password: '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  };

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit(e) {
      e.preventDefault();
      console.log(this.state.nombre)
      this.props.registrarse()
    };

  render(){
    return(
      <RegisterForm
        cambiar = { this.handleChange }
        subirRegister = { this.handleSubmit }
        stateNombre = { this.state.nombre }
        stateEmail = { this.state.email }
        statePassword = { this.state.password }
      />
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(Register);
