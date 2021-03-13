import React, { useEffect, useState } from 'react';
import { Toast, Button } from 'react-bootstrap';
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
import TransactionsPage from './components/TransactionsPage'
import './App.css';
import { Carousel } from 'react-bootstrap';
import ProdukPage from './components/ProdukPage';
import ListPage from './components/ListPage';
import CreateSeller from './testing/CreateSeller';
import TransactionDetailsPage from './components/TransactionDetailsPage';
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
  const [bought, setBought] = useState({});
  const [showBoughtSucces, setShowBoughtSuccess] = useState(false);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [showRemoveFromCart, setShowRemoveFromCart] = useState(false);

  useEffect(() => {
    fetch(`${SERVER_HOST}`, {
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      setAuth(data.auth);
      if(data.auth) { 
        setUser(data.userSession);
        let tempBought = {};
        for(let i = 0; i < data.userSession.carts.length; i++) {
          const item = data.userSession.carts[i];
          tempBought = { ...tempBought, [item.product._id]: true};
        }
        setBought({...tempBought});
      }
      setFetched(true);
    });
  }, [setAuth, setUser, setFetched, setBought, showBoughtSucces]);

  return (
    <div className="App" >

      <div className="d-flex justify-content-center align-items-center">
        <Toast onClose={() => setShowBoughtSuccess(false)} show={showBoughtSucces} delay={2000} autohide
            style={{
              position: 'fixed',
              top: "50vh",
              zIndex: 99999,
              backgroundColor: "white",
              width: "200px"
            }}>
            <Toast.Body className="d-flex flex-column align-items-center">
              <div class="check_mark" style={{ position: "relative", right: "3px" }}>
                <div class="sa-icon sa-success animate">
                  <span class="sa-line sa-tip animateSuccessTip"></span>
                  <span class="sa-line sa-long animateSuccessLong"></span>
                  <div class="sa-placeholder"></div>
                  <div class="sa-fix"></div>
                </div>
              </div>
              <h6><b>Pembelian berhasil</b></h6>
            </Toast.Body>
        </Toast>
      </div>

      <div className="d-flex justify-content-center">
        <Toast onClose={() => setShowAddToCart(false)} show={showAddToCart} delay={1500} autohide
            style={{
              position: 'fixed',
              top: "100px",
              zIndex: 99999,
              backgroundColor: "rgb(82, 159, 31, .9)",
              color: "white",
              maxWidth: "100vw"
            }}>
            <Toast.Body>
              Produk telah ditambahkan ke kantong belanja
            </Toast.Body>
        </Toast>
      </div>

      <div className="d-flex justify-content-center">
        <Toast onClose={() => setShowRemoveFromCart(false)} show={showRemoveFromCart} delay={1500} autohide
            style={{
              position: 'fixed',
              top: "100px",
              zIndex: 99999,
              backgroundColor: "rgb(220, 53, 67, .9)",
              color: "white",
              maxWidth: "100vw"
            }}>
            <Toast.Body>
              Produk telah dikeluarkan dari kantong belanja
            </Toast.Body>
        </Toast>
      </div>

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
            <HomePage user={user} setUser={setUser} bought={bought} setBought={setBought}
            setShowAddToCart={setShowAddToCart} setShowRemoveFromCart={setShowRemoveFromCart}
            />
            <FooterPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage user={user} setUser={setUser} setShowBoughtSuccess={setShowBoughtSuccess}/>
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
            <ProdukPage user={user} setUser={setUser} bought={bought} 
            setBought={setBought} setShowAddToCart={setShowAddToCart} 
            setShowRemoveFromCart={setShowRemoveFromCart}/>
            <FooterPage />
          </Route>
          <Route path="/products">
            <NavbarPage auth={auth} user={user} fetched={fetched}/>
            <ListPage 
            user={user} setUser={setUser} bought={bought} setBought={setBought}
            setShowAddToCart={setShowAddToCart} setShowRemoveFromCart={setShowRemoveFromCart}
            />
            <FooterPage />
          </Route>
          <Route exact path="/transactions">
            <NavbarPage auth={auth} user={user} fetched={fetched} />
            <TransactionsPage user={user} setUser={setUser}/>
          </Route>
          <Route path="/transactions/details">
            <NavbarPage auth={auth} user={user} fetched={fetched} />
            <TransactionDetailsPage user={user} setUser={setUser}/>
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
