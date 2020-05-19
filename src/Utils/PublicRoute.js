import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
    const userAndToken = () => {
        const localS = localStorage.getItem('login');
        if(localS) return JSON.parse(localS);
        return null;
    }
    return (
        <Route
        {...rest}
        render={(props) => !userAndToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
        />
    )
}
export default PublicRoute