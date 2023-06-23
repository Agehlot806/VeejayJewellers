import React from 'react'
import Header from '../../directives/header'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import product6 from '../../assets/images/img/product6.png'
import Footer from '../../directives/footer'

function Productvariety() {
    return (
        <>
            <Header />
            <section className='section-padding'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                            <div className='bestseller'>
                                <h4 className='main-heading'>Product Variety</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-3">
                        <Col lg={3} sm={6} className='mb-5'>
                            <Link to=''>
                                <div className='bestseller-card'>
                                    <div className='bestseller-cardImg'>
                                        <img src={product6} />
                                    </div>

                                </div>
                                <div className='bestseller-cardText'>
                                    <h5>Bangle "MURATO"</h5>
                                    <p>15gms</p>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star-o" /></a>
                                    <div className='addCard-btn'>
                                        <Link to='/product-add-card'>Add to cart</Link>
                                    </div>
                                </div>

                            </Link>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <Link to=''>
                                <div className='bestseller-card'>
                                    <div className='bestseller-cardImg'>
                                        <img src={product6} />
                                    </div>

                                </div>
                                <div className='bestseller-cardText'>
                                    <h5>Bangle "MURATO"</h5>
                                    <p>15gms</p>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star-o" /></a>
                                    <div className='addCard-btn'>
                                        <Link to='/product-add-card'>Add to cart</Link>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <Link to=''>
                                <div className='bestseller-card'>
                                    <div className='bestseller-cardImg'>
                                        <img src={product6} />
                                    </div>

                                </div>
                                <div className='bestseller-cardText'>
                                    <h5>Bangle "MURATO"</h5>
                                    <p>15gms</p>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star-o" /></a>
                                    <div className='addCard-btn'>
                                        <Link to='/product-add-card'>Add to cart</Link>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <Link to=''>
                                <div className='bestseller-card'>
                                    <div className='bestseller-cardImg'>
                                        <img src={product6} />
                                    </div>

                                </div>
                                <div className='bestseller-cardText'>
                                    <h5>Bangle "MURATO"</h5>
                                    <p>15gms</p>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star" /></a>
                                    <a><i className="fa fa-star-o" /></a>
                                    <div className='addCard-btn'>
                                        <Link to=''>Add to cart</Link>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Productvariety