import { combineReducers } from 'redux';

import products from './listaProductos.js';
import carrito from './carrito.js';
import usuario from './usuarios.js';

const rootReducer = combineReducers({ products, carrito, usuario });

export default rootReducer;
