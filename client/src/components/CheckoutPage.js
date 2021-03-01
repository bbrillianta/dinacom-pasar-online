import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../css/CheckoutPage.css';

const CheckoutPage = () => {
    return (
        <Container className="checkout-page py-2 px-5" fluid>
            <Row>
                <Col>iki wenehono icon back Checkout belanjaan</Col>
            </Row>
            <Row className="mt-3">
                <Col md="6">
                    <div className="left-col p-4"> 
                        <h6>Alamat Pengiriman</h6>
                        <h6>Total Pesanan</h6>
                        <h6>Metode Pembayaran</h6>
                    </div>
                </Col>
                <Col md="6">
                    <div className="right-col p-4">
                        <strong>Detail Pesanan</strong>
                        <hr></hr>
                        <hr></hr>
                        <h6> Total Pembayaran</h6>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CheckoutPage;