import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({isAuth, path, Component, ...props}) => {

  return isAuth ? (
    <Route path={path} >
      <Component {...props} />
    </Route>
  ) : (<Redirect to="/login" />)
}

export default PrivateRoute;