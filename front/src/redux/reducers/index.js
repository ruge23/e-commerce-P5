import { combineReducers } from 'redux';

import products from './listaProductos.js';
import carrito from './carrito.js';

const rootReducer = combineReducers({ products, carrito });

export default rootReducer;
