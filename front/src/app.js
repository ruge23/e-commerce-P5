import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js'

//componentes
import Main from './component/main.jsx'
import ProductosContainer from './container/ProductosContainer.jsx'
import ProductoContainer from './container/ProductoContainer.jsx'

//dependencias
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

const router = (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={ProductosContainer}/>
        <Route path='/producto/:nombre' component = {ProductoContainer}/>
      </Route>
    </Router>
)

render(router, document.getElementById('app'));
