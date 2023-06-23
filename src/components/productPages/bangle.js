import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import bangle1 from '../../assets/images/img/bangle1.png'
import product2 from '../../assets/images/img/product2.png'
import bangle3 from '../../assets/images/img/bangle3.png'
import bangle2 from '../../assets/images/img/bangle2.png'
import bangle4 from '../../assets/images/img/bangle4.png'


function Bangle() {
    return (
        <>
            <Header />
            <div className='allPage-bg'>
                <div className='section-padding'>
                    <div className='AllPage-area'>
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <h2>NEW COLLECTION “bangles”</h2>
                                    <Link to=''>Shop now</Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
            <section className='section-padding'>
                <Container>
                    <Row >
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle1} />
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
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle3} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle1} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle4} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle4} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle1} />
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
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle3} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle1} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle4} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle4} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Bangle