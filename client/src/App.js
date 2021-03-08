import React, { useEffect } from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import NavbarPage from './components/NavbarPage';
import CarouselPage from './components/CarouselPage';
import CheckoutPage from './components/CheckoutPage';
import CreateProducts from './testing/CreateProducts';
import ShowProducts from './testing/ShowProducts';
import FooterPage from './components/FooterPage';
import KeranjangPage from './components/KeranjangPage';
import './App.css';
import { Carousel } from 'react-bootstrap';
import ProdukPage from './components/ProdukPage';
import ListPage from './components/ListPage';
import CreateSeller from './testing/CreateSeller';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


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
            <FooterPage />
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
          <Route path="/keranjang">
            <NavbarPage />
            <KeranjangPage />
          </Route>
          <Route path="/produk">
            <NavbarPage />
            <ProdukPage />
            <FooterPage />
          </Route>
          <Route path="/list">
            <NavbarPage />
            <ListPage />
            <FooterPage />
          </Route>
          <Route path="/seller/create">
            <CreateSeller />
          </Route>
          <Route >
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
