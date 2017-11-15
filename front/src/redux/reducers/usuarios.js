function usuario(state={}, action){
  switch (action.type) {
    case 'USER_LOGGEADO':
        return action.user;
    default:
        return state;
  }
};

export default usuario;
