import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders } from '../components';
import RouteProtector from './RouteProtector';

const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <RouteProtector path="/order" exact component={OrderForm} />
        <RouteProtector path="/order/:id" component={OrderForm} />
        <RouteProtector path="/view-orders" exact component={ViewOrders} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
