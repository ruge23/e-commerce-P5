import React from 'react';
import { Link } from 'react-router';

function register(props){
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

export default register
