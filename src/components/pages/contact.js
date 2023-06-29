import { useState } from 'react';
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import bannertwo from '../../assets/images/banner/image 12.png'
import border from '../../assets/images/banner/border.png'


function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <Header />
            <div className='allPage-bgtwo'>
                <Container fluid className='p-0'>
                    <img src={bannertwo} />
                </Container>
            </div>

            <section className='section-padding'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <div className='text-center'>
                                <h4 className='main-heading text-center'>ContactUs</h4>
                                <div className='all-border'>
                                    <img src={border} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className='contact-text'>
                                <h1>How Can We Help You?</h1>
                            </div>
                            <div className='contact-icons'>
                                <div><i className="fa fa-phone-square" /></div>
                                <div className='contact-iconsText'>
                                    <h5>Telephone</h5>
                                    <h6>+91 00000000 , +91 00000000</h6>
                                </div>
                            </div>

                        </Col>
                        <Col lg={8}>
                            <div className='contact-icons mt-4'>
                                <div><i className="fa fa-clock-o" /></div>
                                <div className='contact-iconsText'>
                                    <h5>Opening Times</h5>
                                    <h6>10:00 AM - 6:00 PM</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <div className='contact-text mt-4'>
                                <h1>Our Location</h1>
                            </div>
                            <div className='contact-icons'>
                                <div><i className="fa fa-address-card-o" /></div>
                                <div className='contact-iconsText'>
                                    <h5>Telephone</h5>
                                    <h6>1 Kundamal House, 67, N S Patkar Marg, Opposite - Mercedes Benz, Mumbai, Maharashtra 400007</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='section-padding'>
                <Container>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
                        width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Contact