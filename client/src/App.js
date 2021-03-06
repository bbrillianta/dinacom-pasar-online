import React, { useEffect } from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import NavbarPage from './components/NavbarPage';
import CarouselPage from './components/CarouselPage';
import CheckoutPage from './components/CheckoutPage';
import CreateProducts from './testing/CreateProducts';
import ShowProducts from './testing/ShowProducts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/">
            <NavbarPage />
            <CarouselPage />
            <HomePage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/product/create">
            <CreateProducts />
          </Route>
          <Route path='/product'>
            <ShowProducts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
