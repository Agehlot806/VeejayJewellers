import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, ProgressBar, Row, Col } from 'react-bootstrap';

function Calculator() {
    return (
        <>
            <Header />
            <section className='section-padding calcutor-area'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7}>
                           <div className='calcutor-card'>
                           <Row>
                                <Col sm={12}>
                                    <div className='calcutor'>
                                        <h4>18 Carat Gold</h4>
                                        <ProgressBar now={60} />
                                    </div>
                                    <h3>₹ 59,200</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                <div className='calcutor'>
                                <h4>Gold Current Price <span>(10gms)</span></h4>
                                <ProgressBar now={80} />
                            </div>
                            <h3>₹ 19,200</h3>
                                </Col>
                            </Row>
                            <Row className='mt-3 mb-3'>
                                <Col sm={6}><h5>Total Price</h5></Col>
                                <Col sm={6}><h6>₹ 83,488</h6></Col>
                            </Row>
                           </div>

                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />
        </>
    )
}

export default Calculator