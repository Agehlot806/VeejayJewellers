import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import logo from '../../assets/images/logo/logo.png';

function Productlock() {
    return (
        <>
            <section className='section-padding'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className='text-center mb-3'>
                                <img src={logo} className='logo' />
                            </div>
                            <div className='contact-form'>
                                <h2>Sign in to view catalogue</h2>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Mobile Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter mobile number"
                                        />
                                    </Form.Group>
                                    <div className=''>
                                        <Button to='' className='main-btn'>CONTINUE</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Productlock