import { useState } from 'react';
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

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
            <div className='allPage-bg'>
                <div className='section-padding'>
                    <div className='AllPage-area'>
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <h2>CONTACT</h2>
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
                    <Row className="justify-content-center">
                        <Col lg={9}>
                                <h4 className='main-heading text-center'>ContactUs</h4>
                                <p className='text-center'>Lorem Ipsum is simply dummy text of the printing.</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-3">
                        <Col lg={10}>
                            <div className='contact-form'>
                                <h2>Ready to Get Started?</h2>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <Form>
                                    
                                    <Form.Group className="mb-3">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter full name"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter mobile number"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            type="text"
                                            placeholder="Leave a comment here"
                                        />
                                    </Form.Group>
                                    <div className='mt-5'>
                                        <Button className='main-btn'><i className="fa fa-angle-double-right"/> Submit</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={4} sm={6} className="mt-2 mb-2">
                            <div className='contact-box'>
                            <i className="fa fa-address-card-o" />
                            <h3>Our Address:</h3>
                            <p>1 Kundamal House, 67, N S Patkar Marg, Opposite - Mercedes Benz, Mumbai, Maharashtra 400007</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className="mt-2 mb-2">
                            <div className='contact-box'>
                            <i className="fa fa-envelope" />
                            <h3>Our Mailbox:</h3>
                            <p>info@xyz.com</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className="mt-2 mb-2">
                            <div className='contact-box'>
                            <i className="fa fa-phone-square" />
                            <h3>Our Phone:</h3>
                            <p>+00-00000000</p>
                            </div>
                        </Col>
                     
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Contact