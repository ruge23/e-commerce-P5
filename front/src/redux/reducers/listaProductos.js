function lista(state=[], action){
  switch (action.type) {
    case "LIST_PRODUCTS":
        return action.products;
    default:
        return state
  }
};

export default lista;
