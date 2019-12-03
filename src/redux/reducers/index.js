const initialState = {
  userData: {
    isAuth: false
  },
  database: {}
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return {
        ...state,
        userData: {
          isAuth: action.data.isAuth,
          username: action.data.username
        }
      };
    default:
      return {
        ...state
      }
  }
};

export default rootReducer;