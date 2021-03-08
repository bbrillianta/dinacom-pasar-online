import React, { useEffect, useState } from 'react';
import { SERVER_HOST } from '../config.js';
import { Container, Row, Col, CardDeck, Card, Button, CardColumns} from 'react-bootstrap';
import buah from '../asset/KategoriBuah2.png';
import sayur from '../asset/KategoriSayur2.png';
import apel from '../asset/gambar-apel-hijau-1.jpg';
import sawi from '../asset/Caisim-003_stokpangan.com_.jpg';
import wortel from '../asset/wortel-import-fp.jpg'
import strawberry from '../asset/product-packshot-strawberrie-558x600.jpg';
import alpukat from '../asset/Alpukat-Muda.jpg';
import gambar from '../asset/Iklan.jpg';
import '../css/HomePage.css';

const HomePage = () => {
    const [popularProducts, setPopularProducts] = useState([]);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch(`${ SERVER_HOST }/product/popular`)
        .then(res => res.json())
        .then(data => setPopularProducts(data.foundDocs));

        fetch(`${ SERVER_HOST }/product/recommended`)
        .then(res => res.json())
        .then(data => setRecommendedProducts(data.foundDocs));

        fetch(`${ SERVER_HOST }/product`)
        .then(res => res.json())
        .then(data => { 
            const sample = data.foundDocs.slice(0, 15);
            console.log(sample);
            setAllProducts(sample); 
        });
    }, [setPopularProducts, setRecommendedProducts]);

    const productCard =(item, index) => {
        return ( <Card key={ index } className="product">
            <Card.Img variant="top" src={ `${ SERVER_HOST }/${ item.img.path }`} className="produk"/>
            <Card.Body>
                <Card.Title className="text-truncate m-0">
                    { item.name }
                </Card.Title>
                <small>{ item.seller.name }</small>
                <Card.Text className="mt-3">
                    <b>Rp { item.price }</b>/kg
                </Card.Text>
                <Button variant="success" style={{width: "100%"}}>BELI</Button>
            </Card.Body>
        </Card> 
        )
    }

    return (
        <Container>
            <Row className="justify-content-center namakategori">
                <h4><b>Kategori Belanja</b></h4>
            </Row>
            <Row className="justify-content-center kategoribelanja">
                <a href=""><img className="homekategori mr-2" src={buah}></img></a>
                <a href=""><img className="homekategori ml-2" src={sayur}></img></a>
            </Row>

            {/***  Produk terlaris */}
            <Row className="namelist justify-content-between align-items-center pl-4 pr-5">
                <h4><b>Produk Terlaris</b></h4>
                <a><small>Lihat Semua</small></a>
            </Row>
            <Row className="justify-content-center">
                {
                    popularProducts.map((item, index) => 
                        productCard(item, index)
                    )
                }
            </Row>
            
            {/***  Produk pilihan */}
            <Row className="mt-5 justify-content-between align-items-center pl-4 pr-5">
                <h4><b>Produk Pilihan</b></h4>
                <a><small>Lihat Semua</small></a>
            </Row>
            <Row className="justify-content-center">
            {
                    recommendedProducts.map((item, index) => 
                        productCard(item, index)
                    )
                }
            </Row>

            <Row className="my-5">
                <Col>
                        <img className="iklan2" src={gambar}></img>
                </Col>
            </Row>
            
            {/*** Semua produk */}
            <Row className="mt-2 justify-content-center">
                {
                    allProducts.map((item, index) => 
                        productCard(item, index)
                    )
                }
            </Row>
        </Container>
    );
};

export default HomePage;