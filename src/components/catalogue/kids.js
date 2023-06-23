import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap'
import catlog2 from '../../assets/images/img/catlog2.jpg'
import catlog3 from '../../assets/images/img/catlog3.jpg'
import catlog6 from '../../assets/images/img/catlog6.jpg'
import kids from '../../assets/images/banner/kids.jpg'
import product1 from '../../assets/images/img/product1.png'
import product2 from '../../assets/images/img/product2.png'
import product3 from '../../assets/images/img/product3.png'
import product4 from '../../assets/images/img/product4.png'
import product5 from '../../assets/images/img/product5.png'
import product6 from '../../assets/images/img/product6.png'

function Kids() {
    return (
        <>
            <Header />
            <div className='allPage-bg'>
                <div className='section-padding'>
                    <div className='AllPage-area'>
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <h2>KIDS CATALOGUE</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={6} className="mt-2 mb-2">
                            <div className='catlogOne'>
                                <Row>
                                    <Col sm={6}>
                                        <img src={catlog2} />
                                    </Col>
                                    <Col sm={6} className='align-self-center'>
                                        <h2>Earrings</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} className="mt-2 mb-2">
                            <div className='catlogOne'>
                                <Row>
                                    <Col sm={6}>
                                        <img src={catlog3} />
                                    </Col>
                                    <Col sm={6} className='align-self-center'>
                                        <h2>Necklaces</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="mt-2 mb-2">
                            <div className='catlogOne'>
                                <Row>
                                    <Col sm={6} className='align-self-center'>
                                        <h2>Earrings</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</p>
                                    </Col>
                                    <Col sm={6}>
                                        <img src={catlog6} />
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} className="mt-2 mb-2">
                            <div className='catlogOne'>
                                <Row>
                                    <Col sm={6} className='align-self-center'>
                                        <h2>Necklaces</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry.</p>
                                    </Col>
                                    <Col sm={6}>
                                        <img src={catlog2} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section-padding catlogbg'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <img src={kids} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section-padding catlogbg'>
                <Container>
                    <Row>
                        <Col lg={2} sm={6} className="mt-2 mb-2">
                            <div className='catlogbg-card'>
                                <img src={product1} />
                            </div>
                        </Col>
                        <Col lg={2} sm={6} className="mt-2 mb-2">
                            <div className='catlogbg-card'>
                                <img src={product2} />
                            </div>
                        </Col>
                        <Col lg={2} sm={6} className="mt-2 mb-2">
                            <div className='catlogbg-card'>
                                <img src={product3} />
                            </div>
                        </Col>
                        <Col lg={2} sm={6} className="mt-2 mb-2">
                            <div className='catlogbg-card'>
                                <img src={product4} />
                            </div>
                        </Col>
                        <Col lg={2} sm={6} className="mt-2 mb-2">
                            <div className='catlogbg-card'>
                                <img src={product5} />
                            </div>
                        </Col>
                        <Col lg={2} sm={6} className="mt-2 mb-2">
                            <div className='catlogbg-card'>
                                <img src={product6} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            <Footer />
        </>
    )
}

export default Kids