import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import about from '../../assets/images/img/about.jpg'
import about1 from '../../assets/images/img/about1.jpg'
import about2 from '../../assets/images/img/about2.jpg'

function About() {
    return (
        <>
            <Header />
            <div className='allPage-bg'>
                <div className='section-padding'>
                    <div className='AllPage-area'>
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <h2>ABOUT US</h2>
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
                        <Col lg={5} className='align-self-center'>
                            <div className='aboutImg'>
                                <img src={about} />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className='about-content'>
                                    <h1>About “VEEJAY JEWELLERS”</h1>
                                <p><b>Mauris blandit aliquet elit eget tincidunt nibh pulvinar uisque velit
                                    nisi pretium ut lacinia in elementum id enim velit nisi pretium
                                    elementum id enim.</b></p>
                                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec
                                    rutrum congue leo eget malesuada. Praesent sapien massa, convallis a
                                    pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut
                                    lacinia in, elementum id enim.
                                </p>
                                <div className='text-left mt-5'>
                                    <Link to='/contact' className='main-btn'><i className="fa fa-angle-double-right"/> Contact</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='aboutDifferent-bg'>
                <div className='section-padding'>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                <h2>What make us different</h2>
                                <p>A great About Us page helps builds trust between you and your customers.
                                    The more content you provide about you and your business, the more confi-dent
                                    people will be when purchasing from your store.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className='theme-card'>
                                <div className='theme-cardImg'>
                                    <img src={about1} />
                                </div>
                                <div className='theme-cardHead'>
                                        <h3>Our Mission</h3>
                                    <p>Curasre potenti metus natoquefui sociis tempor facilisis tempus ridiaclus porta porttitor feugiat consequat aliquet maecenas turpis.</p>
                                    <p>Dui integer est lobortis fusce odio curabitur accumsan auctor scelerisque</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className='align-self-center'>
                            <div className='aboutCenterImg'>
                                <img src={about2} />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='theme-cardHead'>
                                    <h3>Our Goals</h3>
                                <p>Metus natoquefui sociis tempor facili tempus ridiclus porta porttitor feugiat consequat.</p>
                                <h5>Providing Pure Grade Jewelry</h5>
                                <h5>Easy Customer Service Policy</h5>
                                <h5>Providing Pure Grade Jewelry</h5>
                                <h5>Easy Customer Service Policy</h5>
                                <h5>Providing Pure Grade Jewelry</h5>
                                <h5>Easy Customer Service Policy</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section-padding'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                                <h4 className='main-heading text-center'>About our services</h4>
                                <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} sm={6} className='mt-2 mb-2'>
                            <div className='aboutService'>
                                <h3>Fast delivery</h3>
                                <p>Erat nam at lectus urna. In arcu cursus euismod quis viverra nibh cras pulvinar mat.
                                Erat nam at lectus urna. In arcu cursus euismod quis quisque viverra nibh cras pulvinar mat.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='mt-2 mb-2'>
                            <div className='aboutService'>
                                <h3>Many offers</h3>
                                <p>Fusce id velit ut tortor pretium. Feugiat nibh sed pulvinar proin gravida sed adip.
                                Fusce id velit ut tortor pretium. Feugiat nibh sed pulvinar proin gravida sed adip.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='mt-2 mb-2'>
                            <div className='aboutService'>
                                <h3>24/7 support</h3>
                                <p>Placerat in egestas erat imperdiet. Quis varius quam quisque id diam adipisc diam.
                                Placerat in egestas erat imperdiet. Quis varius quam quisque quisque id diam adipisc diam.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default About