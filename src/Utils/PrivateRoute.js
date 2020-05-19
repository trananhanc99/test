import React from 'react';
import { Route, Redirect } from 'react-router-dom';
function PrivateRoute({ component: Component, ...rest }) {
    const userAndToken = () => {
        const localS = localStorage.getItem('login');
        if(localS) return JSON.parse(localS);
        return null;
    }
        
    
  return (
    <Route
      {...rest}
      render={(props) => userAndToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}
 
export default PrivateRoute;