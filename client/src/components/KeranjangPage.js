import React, { useEffect, useState } from 'react';
import { Row, Col, Container, img , Button, FormControl} from 'react-bootstrap';
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
    const getTotalPrice = (props) => {
        const { carts } = props.user;
        let total = 0;
        for(let i = 0; i < carts.length; i++) {
            total += carts[i].product.price * carts[i].quantity;
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
                            <div className="d-flex justify-content-between bd-highlight mt-3 kotakduaa px-3">
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
                                            <div className="bd-highlight"> <Button variant="outline-danger" className="slider d-flex justify-content-center">-</Button></div>
                                            <div className="bd-highlight mx-md-3">
                                                <FormControl className="text-center slider-text placetext" defaultValue={ item.quantity }/>
                                            </div>
                                            <div className="bd-highlight"><Button variant="outline-secondary" className="slider d-flex justify-content-center">+</Button></div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="bd-highlight d-flex align-items-center" onClick={ () => removeFromCart(item)}>
                                    <img src={del} className="gambarsampah"></img>
                                </div>
                            </div>
                        )
                    }
                    {/* Tawaran proses */}
                    <div className="d-flex justify-content-between bd-highlight kotaksatuu px-3">
                        <div className="d-flex align-items-center">
                            <div class="bd-highlight">
                                <img src={tomat} className="imgprodukkeranjang"></img>
                            </div>
                            <div class="bd-highlight">
                                <div><b>Tomat Merah Besar</b></div>
                                <div className="d-flex align-items-center mt-1">
                                    <div className="hargakeranjang"><b> Rp. 81.600 </b></div>
                                    <b className="mx-1 mx-lg-3">  { '> > >' } </b>
                                    <div className="tawar">Rp. 80.000</div>
                                </div>
                            </div>
                        </div>
                        <div class="bd-highlight d-flex align-items-center"><img src={danger} className="gambarsampah"></img></div>
                    </div>

                    {/* Beli biasa */}
                    <div className="d-flex justify-content-between bd-highlight mt-4 kotakduaa px-3">
                        <div className="d-flex align-items-center">
                            <div className="bd-highlight">
                                <img src={tomat} className="imgprodukkeranjang"></img>
                            </div>
                            <div class="bd-highlight">
                                <div><b>Jeruk Manis</b></div>
                                <div className="d-flex align-items-center mt-1">
                                    <div><b className="hargakeranjangg"> Rp. 18.000 </b>/kg</div>
                                </div>
                                <div class="d-flex bd-highlight mt-1">
                                    <div className="bd-highlight"> <Button variant="outline-danger" className="slider d-flex justify-content-center">-</Button></div>
                                    <div className="bd-highlight mx-md-3"><FormControl className="text-center slider-text placetext" placeholder="1"/></div>
                                    <div className="bd-highlight"><Button variant="outline-secondary" className="slider d-flex justify-content-center">+</Button></div>
                                </div>
                            </div>    
                        </div>
                        <div className="bd-highlight d-flex align-items-center"><img src={del} className="gambarsampah"></img></div>
                    </div>

                    {/* Tawaran diterima */}
                    <div className="d-flex justify-content-between bd-highlight mt-4 kotakduaa px-3">
                        <div className="d-flex align-items-center">
                            <div className="bd-highlight">
                                <img src={tomat} className="imgprodukkeranjang"></img>
                            </div>
                            <div className="bd-highlight">
                                <div><b>Nanas</b></div>
                                <div className="d-flex align-items-center mt-1">
                                    <div className=" "><b className="hargakeranjangg"> Rp. 18.000 </b>/kg</div>
                                    <div className="diskonkeranjang mx-3"><b>  Rp. 32.000 </b></div>
                                    <div className="jumlahdiskokeranjang"><b>Tawaran Diterima</b></div>
                                </div>
                                <div className="d-flex bd-highlight mt-1">
                                    <div className="bd-highlight"> <Button variant="outline-danger" className="slider d-flex justify-content-center">-</Button></div>
                                    <div className="bd-highlight mx-md-3"><FormControl className="text-center slider-text placetext" placeholder="1"/></div>
                                    <div className="bd-highlight"><Button variant="outline-secondary" className="slider d-flex justify-content-center">+</Button></div>
                                </div>
                            </div>                       
                        </div>
                        <div className="bd-highlight d-flex align-items-center"><img src={del} className="gambarsampah"></img></div>
                        
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center boxharga">
                    <div>
                        <div><h6><b>Total Belanja { props.user.carts.length }</b></h6></div>
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