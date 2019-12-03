const getUserData = state => state.userData;

const isLogged = state => ({
  isAuth: state.userData.isAuth
});

const LogIn = args => ({
  type: 'LOG_IN',
  data: args
})


export { getUserData, isLogged, LogIn };