import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomePage  from './pages/homePage';
import LoginPage  from './pages/login';
import Register  from './pages/register';
import AdminPage  from './pages/Admin';
import Booking  from './pages/Booking';
import CreateHotel  from './pages/createHotel';
import UpdateHotel  from './pages/updateHotel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const hist = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <PrivateRoute exact path="/home" component={HomePage}>
        </PrivateRoute>
        <PublicRoute path="/login" component={LoginPage}>
        </PublicRoute>
        <PublicRoute path="/register" component={Register}>
        </PublicRoute>
        <PrivateRoute path="/Admin" component={AdminPage}>
        </PrivateRoute>
        <PrivateRoute path="/booking" component={Booking}>
        </PrivateRoute>
        <PrivateRoute path="/createHotel" component={CreateHotel}>
        </PrivateRoute>
        <PrivateRoute path="/updateHotel" component={UpdateHotel}>
        </PrivateRoute>
        <Route path="/" component={App}>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
