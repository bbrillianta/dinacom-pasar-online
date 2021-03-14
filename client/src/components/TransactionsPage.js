import React from 'react';
import { Row, Col, Container, img , Button, FormControl, Popover, OverlayTrigger} from 'react-bootstrap';
import backicon from '../asset/backicon.png';
import refresh from '../asset/refresh.png';
import ellipsis from '../asset/ellipsis.svg';
import { SERVER_HOST, rupiah } from '../config.js';


const TransactionsPage = (props) => {
    return (
        <Container className="checkout-page pt-4" style={{minHeight: "100vh"}} fluid>
            <Container className="px-5">
            <div class="d-flex justify-content-between ">
                <div><a href="/" className="top"><img width="30" src={backicon}></img></a> Kembali Belanja</div>
            </div>
            <div className="">
                <div className="">
                    {
                        props.user.transactions.map((transaction, index) => {
                            return (
                                <div key={index} 
                                className="d-flex flex-column align-items-center flex-md-row justify-content-md-between bd-highlight mt-3 p-4"
                                style={{ backgroundColor: "white" }}
                                >
                                    
                                    <div className="d-flex flex-column flex-md-row align-items-center">
                                        <div className="mx-md-3 mb-3 mb-md-0 p-1 d-flex aign-items-center justify-content-center"
                                        style={{ backgroundColor: "lightgrey", borderRadius: "20px" }}>
                                            <img src={ellipsis} width="15"></img>
                                        </div>
                                        <div class="bd-highlight ml-md-3 d-flex flex-column align-items-center align-items-md-start">
                                            <div className="text-center"><b>{ transaction.boughtDate }</b></div>
                                            <div className="d-flex align-items-center mt-1">
                                                <div className="text-center">{ transaction.name }</div>
                                            </div>
                                            <div className="text-center">{ transaction.address }</div>
                                        </div>    
                                    </div>
                                    <div className="bd-highlight d-flex align-items-center">
                                        
                                        <a href={`/transactions/details?q=${transaction._id}`} className="mt-4 mt-md-0">
                                            <Button variant="ijo-outline">Lihat Detail</Button>
                                        </a>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>
            </Container>
        </Container>
    );
}

export default TransactionsPage;