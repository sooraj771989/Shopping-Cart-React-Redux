import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import ProductList from "./ProductList";
import Footer from "./Footer";
import NotFound from "../empty-states/NotFound";
import CartList from "./CartList";

const Main = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/products" component={ProductList} />
      <Route path="/cart" component={CartList} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default Main;
