import React, { useEffect, useState } from 'react';
import { Row, Col, Container, img , Button, FormControl, Popover, OverlayTrigger} from 'react-bootstrap';
import backicon from '../asset/backicon.png';
import refresh from '../asset/refresh.png';
import ellipsis from '../asset/ellipsis.svg';
import { SERVER_HOST, rupiah } from '../config.js';
const TransactionDetailsPage = () => {
    const [transaction, setTransaction] = useState([]);

    useEffect(() => {
        const url = new URL(window.location.href);
        const query = url.searchParams.get("q");
        console.log(query);

        fetch(`${SERVER_HOST}/get-transaction?q=${query}`)
        .then(res => res.json())
        .then(data => console.log(data.transaction));
    }, []);

    return (<>
        <Container className="checkout-page pt-4" style={{ minHeight: "100vh" }} fluid>
            <Container className="px-5">
            <div class="d-flex justify-content-between ">
                <div><a href="/" className="top"><img width="30" src={backicon}></img></a> Kembali Belanja</div>
                <div><a href="/cart" className="top"><img className="refresh" src={refresh}></img></a></div>
            </div>
            <div className="">
                <div className="justify-content-center ">
                   
                </div>
            </div>
            </Container>
        </Container>
    </>)
}

export default TransactionDetailsPage;