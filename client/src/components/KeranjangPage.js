import React, { useEffect, useState } from 'react';
import { Row, Col, Container, img , Button, FormControl, Popover, OverlayTrigger} from 'react-bootstrap';
import '../css/FooterPage.css';
import '../css/KeranjangPage.css';
import backicon from '../asset/backicon.png';
import refresh from '../asset/refresh.png';
import tomat from '../asset/tomat.jpg';
import del from '../asset/del.png';
import danger from '../asset/danger.png';
import jerukmanis from '../asset/jerukmanis.jpg';
import nanas from '../asset/nanas.jpg';
import apel from '../asset/gambar-apel-hijau-1.jpg';
import { SERVER_HOST } from '../config.js';
import { rupiah } from '../config.js';

const KeranjangPage = (props) => {
    const [itemQuantity, setItemQuantity] = useState({});

    const getTotalPrice = (props) => {
        const { carts } = props.user;

        let valid = carts.filter(item => item.status === 1);

        let total = 0;
        for(let i = 0; i < valid.length; i++) {
            total += valid[i].product.price * valid[i].quantity;
        }

        return total;
    }

    const removeFromCart = (item) => {
        fetch(`${SERVER_HOST}/remove-cart`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ itemID: item._id })
        })
        .then(res => res.json())
        .then(data => {
            props.setUser(data.userSession) 
        });
    }

    const checkTotalItems = () => {
        let total = props.user.carts.filter(item => item.status === 1);

        return total.length;
    }

    const addQuantity = (item) => {
        fetch(`${SERVER_HOST}/modify-cart?q=inc`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productID: item._id })
        })
        .then(res => res.json())
        .then(data => {
            props.setUser(data.userSession)
        });
    }

    const decreaseQuantity = (item) => {
        fetch(`${SERVER_HOST}/modify-cart?q=dec`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productID: item._id })
        })
        .then(res => res.json())
        .then(data => {
            props.setUser(data.userSession)
        });
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Content>
                Menunggu tawaran dikonfirmasi
            </Popover.Content>
        </Popover>
    );

    const itemStatus = (item, index) => {
        if(item.status === 1) {
            return (
                <div key={index} className="d-flex justify-content-between bd-highlight mt-3 kotakduaa px-3">
                    <div className="d-flex align-items-center">
                        <div className="bd-highlight">
                            <img src={ `${SERVER_HOST}/${item.product.img.path}.jpg`} className="imgprodukkeranjang"></img>
                        </div>
                        <div class="bd-highlight ml-3">
                            <div><b>{ item.product.name }</b></div>
                            <div className="d-flex align-items-center mt-1">
                                <div><b className="hargakeranjangg"> Rp{ rupiah(item.product.price) }</b>/kg</div>
                            </div>
                            <div class="d-flex bd-highlight mt-1">
                                <div className="bd-highlight"> 
                                    <Button variant="outline-danger" className="slider d-flex justify-content-center" onClick={() => decreaseQuantity(item.product)}>-</Button>
                                </div>
                                <div className="bd-highlight mx-md-2">
                                    <FormControl className="text-center slider-text placetext" value={ item.quantity }/>
                                </div>
                                <div className="bd-highlight">
                                    <Button variant="outline-secondary" className="slider d-flex justify-content-center" onClick={() => addQuantity(item.product)}>+</Button>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="bd-highlight d-flex align-items-center" onClick={ () => removeFromCart(item)}>
                        <img src={del} className="gambarsampah"></img>
                    </div>
                </div>
            )
        } else if(item.status === 2) {
            return (
                <div key={index} className="d-flex justify-content-between bd-highlight mt-3 kotaksatuu px-3" style={{position: "relative"}}>
                    <div className="d-flex align-items-center">
                        <div className="bd-highlight">
                            <img src={ `${SERVER_HOST}/${item.product.img.path}.jpg`} className="imgprodukkeranjang"></img>
                        </div>
                        <div class="bd-highlight ml-3">
                            <div><b>{ item.product.name }</b></div>
                            <div className="d-flex align-items-center mt-1">
                                <div>
                                    <b className="hargakeranjangg" style={{ color: "red" }}> Rp{ rupiah(item.product.price * item.quantity) }</b>
                                </div>
                                <b className="mx-1 mx-lg-3">  { '> > > >' } </b>
                                <div className="tawar">Rp. { rupiah(item.product.price - item.discount) }</div>
                                <div className="d-flex align-items-center">
                                    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
                                        <img src={danger} className="gambarsampah ml-3"/>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="bd-highlight d-flex align-items-center" onClick={ () => removeFromCart(item)}>
                        <Button variant="danger">Batal</Button>
                    </div>


                    {/* <img src={del} className="gambarsampah" ></img> */}
                </div>                
            )
        }
    }

    return (
        <Container>
            <div class="d-flex justify-content-between mt-4">
                <div><a href="/" className="top"><img width="30" src={backicon}></img></a> Kembali Belanja</div>
                <div><a href="/cart" className="top"><img className="refresh" src={refresh}></img></a></div>
            </div>
            <div className="boxkeranjang">
                <div className="d-flex justify-content-center keranjangatas"><b>DAFTAR BELANJAAN</b></div>
                <div className="justify-content-center keranjangbawah">
                    {
                        props.user.carts.map((item, index) =>
                            itemStatus(item, index)
                        )
                    }
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center boxharga">
                    <div>
                        <div><h6><b>Total Belanja { checkTotalItems() }</b></h6></div>
                        <div><h5><b>Rp{ rupiah(getTotalPrice(props)) }</b></h5></div>
                    </div>
                    <div>
                        <Button variant="success" href="/checkout"><b>CHECKOUT</b></Button>
                    </div>
            </div>
        </Container>
    );
};

export default KeranjangPage;