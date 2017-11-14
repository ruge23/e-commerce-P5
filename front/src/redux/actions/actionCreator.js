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
}

//Elimina del carrito de compras

export function removeCart(index){
  return{
    type: 'REMOVE_CART',
    index,
  }
}
