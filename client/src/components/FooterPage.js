import React from 'react';
import { Card, Image, Row, Col} from 'react-bootstrap';
import gambar from '../asset/DosarLogo.png';
import gambartas from '../asset/shopping-bag-icon.png';
import gg from '../asset/gg.png';
import fb from '../asset/fb.png';
import ig from '../asset/ig.png';
import twt from '../asset/twt.png';
import '../css/FooterPage.css';
import sayur from '../asset/KategoriSayur2.png';

const FooterPage = () => {
    return (
        <Card.Footer className="text-muted">
            <div className="footer1">
                <div className="baris0"></div>
                <div className="baris1">
                    <a><Image className="ig" src={gg} roundedCircle /></a>
                    
                    <a><Image className="ig" src={ig} roundedCircle /></a>

                    <a><Image className="ig" src={fb} roundedCircle /></a>

                    <a><Image className="ig" src={twt} roundedCircle /></a>
                </div>
                <div className="baris2">
                    <a>Home</a><a>Product</a><a>Blog</a><a>Partner</a><a>Contact</a><a>Location</a>
                </div>
            </div>
            <div className="footer2">
                <div className="f1"></div>
                <div className="f2"><b>DODOALNE PASAR OFFICIAL WEBSITE, CREATED WITH IN SURABAYA</b></div>
                <div className="f3">@COPYRIGHT DOSAR 2021, ALL RIGHTS RESERVED</div>
            </div>
        </Card.Footer>
    );
};

export default FooterPage;