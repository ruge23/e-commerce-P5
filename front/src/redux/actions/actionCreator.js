import axios from 'axios';

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
