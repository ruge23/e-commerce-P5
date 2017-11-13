import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js'

//componentes
import Products from './component/products.jsx'
import Producto from './component/producto.jsx'

//dependencias
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';

const router = (
  <Router history={hashHistory}>
    <Route path='/' component = {Products}>
    </Route>
    <Route path='/producto' component = {Producto}>
    </Route>
  </Router>
)

render(router, document.getElementById('app'));
