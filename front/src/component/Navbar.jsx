import React from 'react';
import { Link } from 'react-router';

function Navbar(){

  return (
    <div className='navbar'>
        <Link to='/#'>
        <img src="https://cdn2.iconfinder.com/data/icons/shopping-e-commerce-3/512/laptop-store-512.png" alt="logo" height="60" width="70"/>
        </Link>


        <input type='text' placeholder='Search...' classname="btn btn-outline-success my-2 my-sm-0"/>
        <input type='submit'/>
        <Link to='https://www.gmail.com'>Log In</Link>
        <Link to='https://www.hotmail.com'>Sing In</Link>
        <img src='http://www.twitchtime.com/wp-content/uploads/2015/06/E-Commerce-Icon.png' alt="logo" height="60" width="70"/>

    </div>
  )
}



export default Navbar
