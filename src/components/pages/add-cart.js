import React from 'react'
import Header from '../../directives/header'
import { Col, Row } from 'react-bootstrap'
import ring2 from '../../assets/images/img/ring2.png'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'

function Addcart() {
    return (
        <>
            <Header />
            <section className="section-padding">
                <Row className="justify-content-center mb-3">
                    <Col lg={5}>
                        <Link to="/check-invoice">
                            <div className='text-center'>
                                <div className='add-cart'>
                                    <div>
                                        <img src={ring2} />
                                    </div>
                                    <div className='add-cart-content'>
                                        <h2>Gold Ring</h2>
                                        <h5>Weight 10gms</h5>
                                        <p>Size: 2.5 <span>Quantity: 4</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col lg={5}>
                        <Link to="/check-invoice">
                            <div className='text-center'>
                                <div className='add-cart'>
                                    <div>
                                        <img src={ring2} />
                                    </div>
                                    <div className='add-cart-content'>
                                        <h2>Gold Ring</h2>
                                        <h5>Weight 10gms</h5>
                                        <p>Size: 2.5 <span>Quantity: 4</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col lg={5}>
                        <Link to="/check-invoice">
                            <div className='text-center'>
                                <div className='add-cart'>
                                    <div>
                                        <img src={ring2} />
                                    </div>
                                    <div className='add-cart-content'>
                                        <h2>Gold Ring</h2>
                                        <h5>Weight 10gms</h5>
                                        <p>Size: 2.5 <span>Quantity: 4</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col lg={5}>
                        <Link to="/check-invoice">
                            <div className='text-center'>
                                <div className='add-cart'>
                                    <div>
                                        <img src={ring2} />
                                    </div>
                                    <div className='add-cart-content'>
                                        <h2>Gold Ring</h2>
                                        <h5>Weight 10gms</h5>
                                        <p>Size: 2.5 <span>Quantity: 4</span></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </section>
            <Footer />
        </>
    )
}

export default Addcart