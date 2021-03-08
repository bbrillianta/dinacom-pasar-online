import React from 'react';
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

const KeranjangPage = () => {
    return (
        <Container>
            <div class="d-flex justify-content-between mt-4">
                <div><a href="/" className="top"><img className="backicon" src={backicon}></img></a> Kembali Belanja</div>
                <div><a href="/keranjang" className="top"><img className="refresh" src={refresh}></img></a></div>
            </div>
            <div className="boxkeranjang">
                <div className="d-flex justify-content-center keranjangatas"><b>DAFTAR BELANJAAN</b></div>
                <div className="justify-content-center keranjangbawah">
                    <div class="d-flex bd-highlight kotaksatuu">
                        <div class="p-2 bd-highlight mt-2">
                            <img src={tomat} className="imgprodukkeranjang"></img>
                        </div>
                        <div class="p-2 bd-highlight mt-4">
                            <div><b>Tomat Merah Besar</b></div>
                            <div className="d-flex justify-content-start">
                                <div className="hargakeranjang mt-2 mr-2"><b> Rp. 81.600 </b></div>
                                <div className="mt-2 mr-2"><b>  > > > > > >  </b></div>
                                <div className="tawar">Rp. 80.000</div>
                            </div>
                        </div>
                        <div class="ms-auto p-2 bd-highlight mt-5"><img src={danger} className="gambarsampah"></img></div>
                    </div>

                    <div class="d-flex bd-highlight mt-4 kotakduaa">
                        <div class="p-2 bd-highlight mt-2">
                            <img src={tomat} className="imgprodukkeranjang"></img>
                        </div>
                        <div class="p-2 bd-highlight mt-2">
                            <div><b>Jeruk Manis</b></div>
                            <div className="d-flex justify-content-start">
                                <div className=" mt-2 mr-2"><b className="hargakeranjangg"> Rp. 18.000 </b>/kg</div>
                                <div className="mt-2 mr-2 diskonkeranjang"><b>  Rp. 32.000 </b></div>
                                <div className="jumlahdiskokeranjang mt-2"><b>(Diskon 15%)</b></div>
                            </div>
                            <div class="d-flex flex-row bd-highlight mb-3">
                                <div class="p-2 bd-highlight"> <Button variant="outline-danger">-</Button></div>
                                <div class="p-2 bd-highlight"><FormControl className="text-center placetext" placeholder="1"/></div>
                                <div class="p-2 bd-highlight"><Button variant="outline-secondary">+</Button></div>
                            </div>
                            
                        </div>
                        <div class="ms-auto p-2 bd-highlight mt-5"><img src={del} className="gambarsampah"></img></div>
                    </div>

                    <div class="d-flex bd-highlight mt-4 kotakduaa">
                        <div class="p-2 bd-highlight mt-2">
                            <img src={tomat} className="imgprodukkeranjang"></img>
                        </div>
                        <div class="p-2 bd-highlight mt-2">
                            <div><b>Nanas</b></div>
                            <div className="d-flex justify-content-start">
                                <div className=" mt-2 mr-2"><b className="hargakeranjangg"> Rp. 18.000 </b>/kg</div>
                                <div className="mt-2 mr-2 diskonkeranjang"><b>  Rp. 32.000 </b></div>
                                <div className="jumlahdiskokeranjang mt-2"><b>Tawaran Diterima</b></div>
                            </div>
                            <div class="d-flex flex-row bd-highlight mb-3">
                                <div class="p-2 bd-highlight"> <Button variant="outline-danger">-</Button></div>
                                <div class="p-2 bd-highlight"><FormControl className="text-center placetext" placeholder="1"/></div>
                                <div class="p-2 bd-highlight"><Button variant="outline-secondary">+</Button></div>
                            </div>
                        </div>
                        <div class="ms-auto p-2 bd-highlight mt-5"><img src={del} className="gambarsampah"></img></div>
                        
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center boxharga">
                    <div>
                        <div><h6><b>Total Belanja 3 Item</b></h6></div>
                        <div><h5><b>Rp. 55.200</b></h5></div>
                    </div>
                    <div>
                        <Button variant="success" href="/checkout"><b>CHECKOUT</b></Button>
                    </div>
            </div>
        </Container>
    );
};

export default KeranjangPage;