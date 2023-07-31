const initialState = {
    email: '',
    password: '',
};
  


  const authReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;