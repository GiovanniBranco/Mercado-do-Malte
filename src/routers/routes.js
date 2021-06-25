import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header";

import Home from "../pages/Home";
import OrderByBigger from "../pages/Home/OrderByBigger";
import OrderBySmalller from "../pages/Home/OrderBySmaller";
import OrderByName from "../pages/Home/OrderByName";
import Details from "../pages/Details";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Categorys from "../pages/Categorys";
import CategoryOrderByBigger from "../pages/Categorys/CategoryOrderByBigger";
import CategoryOrderBySmaller from "../pages/Categorys/CategoryOrderBySmaller";
import CategoryOrderByName from "../pages/Categorys/CategoryOrderByName";
import Fridge from "../pages/Fridge";
import Payment from "../pages/Payment";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order-by-bigger" component={OrderByBigger} />
        <Route path="/order-by-smaller" component={OrderBySmalller} />
        <Route path="/order-by-name" component={OrderByName} />
        <Route path="/products/:nome/details" component={Details} />
        <Route path="/categorys/products/:nome/details" component={Details} />
        <Route path="/categorys/:category/products/:nome/details" component={Details} />
        <Route path="/register" component={Register} />
        <Route exact path={"/categorys/:category"} component={Categorys} />
        <Route
          path="/categorys/:category/order-by-bigger"
          component={CategoryOrderByBigger}
        />
        <Route
          path="/categorys/:category/order-by-smaller"
          component={CategoryOrderBySmaller}
        />
        <Route
          path="/categorys/:category/order-by-name"
          component={CategoryOrderByName}
        />
        <Route path={"/login"} component={Login} />
        <Route path={"/fridge"} component={Fridge} />
        <Route path={"/payment"} component={Payment} />
      </Switch>
    </BrowserRouter>
  );
}
