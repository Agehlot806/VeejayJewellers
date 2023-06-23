import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap'
import men1 from '../../assets/images/img/men1.webp'
import men2 from '../../assets/images/img/men2.webp'
import men3 from '../../assets/images/img/men3.webp'
import men4 from '../../assets/images/img/men4.webp'
import catlogbg from '../../assets/images/banner/mencata.webp'
import men5 from '../../assets/images/img/men5.png'
import men6 from '../../assets/images/img/men6.png'
import men7 from '../../assets/images/img/men7.png'

function Men() {
    return (
        <>
            <Header />
            <div className='allPage-bg'>
                <div className='section-padding'>
                    <div className='AllPage-area'>
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <h2>MEN'S CATALOGUE</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown.</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
          
            <section className="section-padding">
                <Container>
                <Row>
                        <Col lg={4} sm={6} className='mt-2 mb-2'>
                            <div className='catlogbg-card'>
                                <img src={men5} />
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='mt-2 mb-2'>
                            <div className='catlogbg-card'>
                                <img src={men6} />
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='mt-2 mb-2'>
                            <div className='catlogbg-card'>
                                <img src={men7} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            
            <section className='section-padding catlogbg'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <img src={catlogbg} />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={6} className='mt-2 mb-2'>
                            <div className='men-catlog'>
                                <Row>
                                    <Col sm={6}>
                                        <img src={men1} />
                                    </Col>
                                    <Col sm={6} className='align-self-center'>
                                        <h3>Platinum jewellery for men</h3>
                                        <p>When character has courage.it's rare it's Platinum</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} className='mt-2 mb-2'>
                            <div className='men-catlog'>
                                <Row>
                                    <Col sm={6}>
                                        <img src={men2} />
                                    </Col>
                                    <Col sm={6} className='align-self-center'>
                                        <h3>Platinum jewellery for men</h3>
                                        <p>When character has courage.it's rare it's Platinum</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={6} className='mt-2 mb-2'>
                            <div className='men-catlog'>
                                <Row>
                                <Col sm={6} className='align-self-center'>
                                        <h3>Platinum jewellery for men</h3>
                                        <p>When character has courage.it's rare it's Platinum</p>
                                    </Col>
                                    <Col sm={6}>
                                        <img src={men3} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6} className='mt-2 mb-2'>
                            <div className='men-catlog'>
                                <Row>
                                <Col sm={6} className='align-self-center'>
                                        <h3>Platinum jewellery for men</h3>
                                        <p>When character has courage.it's rare it's Platinum</p>
                                    </Col>
                                    <Col sm={6}>
                                        <img src={men4} />
                                    </Col>
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

export default Men