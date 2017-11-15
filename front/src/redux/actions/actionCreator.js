import axios from 'axios';

//Muestra los productos de la lista
export function mostrarProductos(products){
  return{
    type: 'LIST_PRODUCTS',
    products,
  }
};

// funcion que carga todos los productos que esten en el back al front
export function cargarProductos(){
  return (dispatch)=>{
    axios.get('http://localhost:3000/products')
    .then((products)=>{
      dispatch(mostrarProductos(products.data))
    }).catch(console.log)
  }
};

//Agrega al carrito de compras

export function addCart(product){
  return{
    type: 'ADD_CART',
    product,
  }
};

//Elimina del carrito de compras

export function removeCart(index){
  return{
    type: 'REMOVE_CART',
    index,
  }
};

// obetener el storage
export function obtenerLocalStorage(){
  let carrito = JSON.parse(localStorage.getItem('carrito'));
  return carrito || []
};

//  agregar en el storage
export function agregarLocalStorage(producto){
  return (dispatch)=>{
    console.log('se ejecuta')
    var carrito = obtenerLocalStorage()
    carrito.push(producto)
    localStorage.setItem('carrito', JSON.stringify(carrito));
    dispatch(addCart(producto))
  }
};

// sacar del storage
export function sacarDelLocalStorage(producto){
  return (dispatch)=>{
    var carrito = obtenerLocalStorage()
    var index = carrito.findIndex(product => product.nombre === producto.nombre)
    localStorage.removeItem('carrito');
    var nuevoCarrito = [
      ...carrito.slice(0,index),
      ...carrito.slice(index +1)
    ]
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    dispatch(removeCart(index))
  }
};

//
export function loggiado(user){
  return{
    type: 'USER_LOGGEADO',
    user,
  }
};

// registro que manda al back
export function registrarse(){
  return (dispatch)=>{
    axios.post('http://localhost:3000/signup')
    .then((user)=>{
      dispatch(loggiado(user))
    }).catch(console.log)
  }
};
