import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreator';

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
      console.log("props", props)
  };

    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit(e) {
      e.preventDefault();
      console.log(this.state.nombre)
        // if(e.target.name)
        // if(e.target.email)
        // if(e.target.password)
      this.props.registrarse()
    };


  render(){
    return(
      <center>
        <div>
          <h1>Registrate</h1>
          <form>
            <label>
              email:
              <input type="email" placeholder="e-mail" name="email" value={this.state.value} onChange={this.handleChange}></input>
            </label>

            <label>
              nombre:
              <input type="text" placeholder="nombre" name="nombre" value={this.state.value} onChange={this.handleChange}></input>
            <label>

            </label>
              password:
              <input type="password" placeholder="password" name="password" value={this.state.value} onChange={this.handleChange}></input>
            </label>

            <br/>
            <button onClick= { this.handleSubmit }>Registrarse</button>
          </form>
        </div>
      </center>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(Register);
