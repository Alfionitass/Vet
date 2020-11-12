import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}){
  const token = localStorage.getItem('token')
  return(
    token ?
    <Route render={props => <Component {...props} />} {...rest}/> :
    <Redirect to="/login" />
  )
}

export default PrivateRoute