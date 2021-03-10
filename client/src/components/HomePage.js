import React, { useEffect, useState } from 'react';
import { SERVER_HOST } from '../config.js';
import { Container, Row, Col, CardDeck, Card, Button, CardColumns} from 'react-bootstrap';
import buah from '../asset/KategoriBuah3.jpg';
import sayur from '../asset/KategoriSayur3.jpg';
import apel from '../asset/gambar-apel-hijau-1.jpg';
import sawi from '../asset/Caisim-003_stokpangan.com_.jpg';
import wortel from '../asset/wortel-import-fp.jpg'
import strawberry from '../asset/product-packshot-strawberrie-558x600.jpg';
import alpukat from '../asset/Alpukat-Muda.jpg';
import gambar from '../asset/Iklan.jpg';
import gambar3 from '../asset/Iklan3.jpg';
import '../css/HomePage.css';
import ProductCard from './ProductCard';

const HomePage = () => {
    const [popularProducts, setPopularProducts] = useState([]);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch(`${ SERVER_HOST }/product/popular`)
        .then(res => res.json())
        .then(data => { 
            const sample = data.foundDocs.slice(0, 5);
            setPopularProducts(sample); 
        });

        fetch(`${ SERVER_HOST }/product/recommended`)
        .then(res => res.json())
        .then(data =>  { 
            const sample = data.foundDocs.slice(0, 5);
            setRecommendedProducts(sample); 
        });

        fetch(`${ SERVER_HOST }/product`)
        .then(res => res.json())
        .then(data => { 
            const sample = data.foundDocs.slice(0, 15);
            console.log(sample);
            setAllProducts(sample); 
        });
    }, [setPopularProducts, setAllProducts, setRecommendedProducts ]);

    

    return (
        <Container>
            <Row className="justify-content-center namakategori">
                <h4><b>Kategori Belanja</b></h4>
            </Row>
            <Row className="justify-content-center kategoribelanja">
                <a href="/products?q=buah"><img className="homekategori" src={buah}></img></a>
                <a href="/products?q=sayur"><img className="homekategori" src={sayur}></img></a>
            </Row>

            {/***  Produk terlaris */}
            <Row className="namelist justify-content-between align-items-center mt-5 pl-4 pr-5">
                <h4><b>Produk Terlaris</b></h4>
                <a href="/products?q=popular"><small>Lihat Semua</small></a>
            </Row>
            <Row className="justify-content-center">
                {
                    popularProducts.map((item, index) =>
                        <ProductCard item={item} index={index} />
                    )
                }
            </Row>
            
            {/***  Produk pilihan */}
            <Row className="mt-5 justify-content-between align-items-center pl-4 pr-5">
                <h4><b>Produk Pilihan</b></h4>
                <a href="/products?q=recommended"><small>Lihat Semua</small></a>
            </Row>
            <Row className="justify-content-center">
            {
                    recommendedProducts.map((item, index) => 
                        <ProductCard item={item} index={index} />
                    )
                }
            </Row>

            <Row className="my-5">
                <Col>
                        <img className="iklan2" src={gambar3}></img>
                </Col>
            </Row>
            
            {/*** Semua produk */}
            <Row className="mt-2 justify-content-center">
                {
                    allProducts.map((item, index) => 
                        <ProductCard item={item} index={index} />
                    )
                }
            </Row>
            <Row className="justify-content-center mt-5">
                <a href="/products"><Button variant="ijo" style={{width: "400px"}}>LIHAT LAINNYA</Button></a>
            </Row>
        </Container>
    );
};

export default HomePage;