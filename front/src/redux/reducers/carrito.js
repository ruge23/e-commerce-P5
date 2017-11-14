function carrito(state ={}, action){
  switch (action.type) {
    case 'ADD_CART':
      return [
        ...state.slice(),
        action.product,
      ]
    case 'REMOVE_CART':
      let i = action.index
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1),
      ]
    default:
      return state
  }
}

export default carrito;
