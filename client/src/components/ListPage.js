import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Card, CardDeck, Button } from 'react-bootstrap';
import { SERVER_HOST } from '../config.js';
import sayur from '../asset/KategoriSayur2.png';
import apel from '../asset/gambar-apel-hijau-1.jpg';
import sawi from '../asset/Caisim-003_stokpangan.com_.jpg';
import wortel from '../asset/wortel-import-fp.jpg'
import strawberry from '../asset/product-packshot-strawberrie-558x600.jpg';
import alpukat from '../asset/Alpukat-Muda.jpg';
import backicon from '../asset/backicon.png';
import '../css/ListPage.css';
import ProductCard from './ProductCard.js';

const ListPage = () => {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        const url = new URL(window.location.href);
        const query = url.searchParams.get("q");

        if(query === "popular") {
            fetch(`${ SERVER_HOST }/product/popular`)
            .then(res => res.json())
            .then(data => { 
                const sample = data.foundDocs;
                setProducts(sample); 
            });
            setTitle("Produk Terlaris");
        } else if(query === "recommended") {
            fetch(`${ SERVER_HOST }/product/recommended`)
            .then(res => res.json())
            .then(data =>  { 
                const sample = data.foundDocs;
                setProducts(sample); 
            });
            setTitle("Produk Pilihan");
        } else if(query === "sayur") {
            fetch(`${ SERVER_HOST }/product/category?q=Sayur`)
            .then(res => res.json())
            .then(data =>  { 
                const sample = data.foundDocs;
                setProducts(sample); 
            });
            setTitle("Produk Sayuran");
        } else if(query === "buah") {
            fetch(`${ SERVER_HOST }/product/category?q=Buah`)
            .then(res => res.json())
            .then(data =>  { 
                const sample = data.foundDocs;
                setProducts(sample); 
            });
            setTitle("Produk Buah-buahan");
        } else {
            fetch(`${ SERVER_HOST }/product/`)
            .then(res => res.json())
            .then(data =>  { 
                const sample = data.foundDocs;
                setProducts(sample); 
            });
            setTitle("Semua Produk");
        }
    }, [setProducts, setTitle]);

    return (
        <Container>
            <Row className="mt-3">
                <a href="/" className="ml-4" style={{ position: "absolute" }}><img width="30"  src={backicon}></img></a>
                <h5 className="align-self-center mx-auto mt-1"><b >{ title }</b></h5>
            </Row>
            <Row className="justify-content-center">
                {
                    products.map((item, index) => 
                        <ProductCard item={item} index={index} />
                    )
                } 
            </Row>
        </Container>
    );
};

export default ListPage;