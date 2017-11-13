import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

//componentes
import store from './store.js'
import Main from './component/main.jsx'
import ProductosContainer from './container/ProductosContainer.jsx'
import ProductoContainer from './container/ProductoContainer.jsx'

//dependencias
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

const router = (
    <Provider store= {store}>
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={ProductosContainer}/>
          <Route path='/producto/:nombre' component = {ProductoContainer}/>
        </Route>
      </Router>
    </Provider>
)

render(router, document.getElementById('app'));
