import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {obtenerLocalStorage} from './redux/actions/actionCreator.js'

import rootReducer from './redux/reducers/index.js'

const defaultState = {
  products : [],
  carrito: obtenerLocalStorage(),
};

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
