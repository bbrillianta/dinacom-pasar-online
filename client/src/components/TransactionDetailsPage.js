import React, { useEffect, useState } from 'react';
import { Row, Col, Container, img , Button, FormControl, Popover, OverlayTrigger} from 'react-bootstrap';
import backicon from '../asset/backicon.png';
import refresh from '../asset/refresh.png';
import ellipsis from '../asset/ellipsis.svg';
import { SERVER_HOST, rupiah } from '../config.js';
const TransactionDetailsPage = () => {
    const [transaction, setTransaction] = useState({ bought: [] });

    useEffect(() => {
        const url = new URL(window.location.href);
        const query = url.searchParams.get("q");

        fetch(`${SERVER_HOST}/get-transaction?q=${query}`)
        .then(res => res.json())
        .then(data => setTransaction(data.transaction));
    }, [setTransaction]);

    return (
        <Container className="checkout-page pt-4" style={{minHeight: "88vh"}} fluid>
            <Container className="px-5">
            <div class="d-flex justify-content-between ">
                <div><a href="/transactions" className="top"><img width="30" src={backicon}></img></a>Transaksi lain</div>
            </div>
            <div className="">
                <div className="justify-content-center ">
                    {
                        transaction.bought.map((bought, index) => {
                            return (
                                <div key={index} 
                                className="d-flex flex-column flex-sm-row justify-content-between bd-highlight mt-3 p-4"
                                style={{ backgroundColor: "white" }}
                                > 
                                    <div className="d-flex flex-column flex-sm-row align-items-center ">
                                        <div>
                                            <img src={`${SERVER_HOST}/${bought.product.img.path}.jpg`} className="imgprodukkeranjang"></img>
                                        </div>
                                        <div class="bd-highlight d-flex flex-column align-items-center align-items-sm-start  ml-sm-3">
                                            <div><b>{ bought.product.name }</b></div>
                                            <div className="d-flex flex-column flex-sm-row align-items-center mt-1">
                                                <small><b>Jumlah: { bought.quantity }Kg</b></small>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="d-flex flex-column align-items-center justify-content-center ">
                                        <div>Sub Total</div>
                                        <h5><b>Rp{ rupiah(bought.quantity * bought.product.price - bought.discount) }</b></h5>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>
            </Container>
        </Container>
    )
}

export default TransactionDetailsPage;