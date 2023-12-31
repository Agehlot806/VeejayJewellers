import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import product6 from '../../assets/images/img/product6.png'
import product7 from '../../assets/images/img/product7.png'

function Earrings() {
    return (
        <>
            <Header />
            <div className='allPage-bg'>
                <div className='section-padding'>
                    <div className='AllPage-area'>
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <h2>NEW COLLECTION “earrings”</h2>
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
                                    <img src={product6} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                    
                                 <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product7} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                    
                                 <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Earrings