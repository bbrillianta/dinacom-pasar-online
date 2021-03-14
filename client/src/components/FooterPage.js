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
        <Card.Footer className="text-muted mt-5">
            <div className="footer1 d-flex flex-column justify-content-center p-4">
                <div className="baris1">
                    <a><Image className="ig mx-2" src={gg} roundedCircle /></a>
                    
                    <a><Image className="ig mx-2" src={ig} roundedCircle /></a>

                    <a><Image className="ig mx-2" src={fb} roundedCircle /></a>

                    <a><Image className="ig mx-2" src={twt} roundedCircle /></a>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-md-3">
                    <a className="mt-4 mt-md-0 mx-md-2">Home</a>
                    <a className="mt-2 mt-md-0 mx-md-2">Product</a>
                    <a className="mt-2 mt-md-0 mx-md-2">Blog</a>
                    <a className="mt-2 mt-md-0 mx-md-2">Partner</a>
                    <a className="mt-2 mt-md-0 mx-md-2">Contact</a>
                    <a className="mt-2 mt-md-0 mx-md-2">Location</a>
                </div>
            </div>
            <div className="footer2 d-flex flex-column justify-content-center">
                <div className="f2"><b>DODOLANE PASAR OFFICIAL WEBSITE, CREATED WITH {'<3'} IN SURABAYA</b></div>
                <div className="f3">@COPYRIGHT DOSAR 2021, ALL RIGHTS RESERVED</div>
            </div>
        </Card.Footer>
    );
};

export default FooterPage;