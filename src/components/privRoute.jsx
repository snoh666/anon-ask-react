import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({isAuth, ...props}) => {

  return isAuth ? (
    <Route {...props} />
  ) : (<Redirect to="/login" />)
}

export default PrivateRoute;