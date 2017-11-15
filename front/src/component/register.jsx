import React from 'react';
import { Link } from 'react-router';

const register = function(props){
  return(
      <div>
        <h1>Registrate</h1>
        <form>
          <label>
            email:
            <input type="email" placeholder="e-mail" name="email" value={ props.stateEmail } onChange={props.cambiar}></input>
          </label>

          <label>
            nombre:
            <input type="text" placeholder="nombre" name="nombre" value={ props.stateNombre } onChange={props.cambiar}></input>
          </label>

          <label>
            password:
            <input type="password" placeholder="password" name="password" value={ props.statePassword } onChange={props.cambiar}></input>
          </label>

          <br/>
          <button onClick= { props.subirRegister }>Registrarse</button>
        </form>
      </div>
  )
}

export default register;
