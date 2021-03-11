import React, { useEffect, useState } from 'react';
import { SERVER_HOST } from './config.js';
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
  const [fetched, setFetched] = useState(false);
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    carts: [],
    transactions: [],
  });

  useEffect(() => {
    fetch(`${SERVER_HOST}`, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      setAuth(data.auth);
      if(data.auth) setUser(data.userSession);
      
      setFetched(true);
    });
  }, [setAuth, setUser, setFetched]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage setAuth={setAuth} setUser={setUser}/>
          </Route>
          <Route path="/register">
            <RegisterPage setAuth={setAuth} setUser={setUser}/>
          </Route>
          <Route exact path="/">
            <NavbarPage auth={auth} user={user} fetched={fetched} />
            <CarouselPage />
            <HomePage user={user} setUser={setUser}/>
            <FooterPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          {/* <Route path="/product/create">
            <CreateProducts />
          </Route>
          <Route path='/product'>
            <ShowProducts />
          </Route> */}
          <Route path="/cart">
            <NavbarPage auth={auth} user={user} fetched={fetched}/>
            <KeranjangPage user={user} setUser={setUser} />
          </Route>
          <Route path="/product">
            <NavbarPage auth={auth} user={user} fetched={fetched}/>
            <ProdukPage user={user} setUser={setUser}/>
            <FooterPage />
          </Route>
          <Route path="/products">
            <NavbarPage auth={auth} user={user} fetched={fetched}/>
            <ListPage user={user} setUser={setUser}/>
            <FooterPage />
          </Route>
          {/* <Route path="/seller/create">
            <CreateSeller />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
