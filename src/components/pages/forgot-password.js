import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

function Forgotpassword() {
    return (
        <>
            <Header />
            <section className='section-padding'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <h4 className='main-heading text-center'>Forgot your password</h4>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-3">
                        <Col lg={10}>
                            <div className='contact-form'>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter mobile number"
                                        />
                                    </Form.Group>
                                    <div className='mt-4'>
                                        <Button className='main-btn'><i className="fa fa-angle-double-right" /> Reset</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Forgotpassword