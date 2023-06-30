import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, ProgressBar, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
function Calculator() {
    const [value, setValue] = useState(50);
    const handleRangeChange = (event) => {
        setValue(event.target.value);
    };
    const [selectedValue, setSelectedValue] = useState("");
    const minProductValue = 1; // Minimum value for the quantity
    const maxProductValue = 50; // Maximum value for the quantity
    const [quantity, setQuantity] = useState(minProductValue);
    const handleIncrement = () => {
        if (quantity < maxProductValue) {
            setQuantity(quantity + 1);
        }
    };
    const handleDecrement = () => {
        if (quantity > minProductValue) {
            setQuantity(quantity - 1);
        }
    };
    const totalPrice = quantity * value;
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
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
                                            <Form.Group controlId="exampleForm.SelectCustom">
                                                <Form.Label>18 Carat Gold:</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    value={selectedValue}
                                                    onChange={handleSelectChange}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="option1">22</option>
                                                    <option value="option2"> 24</option>
                                                    <option value="option3"> 30</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </div>
                                        <input
                                            type="range"
                                            min={0}
                                            max={1000000}
                                            value={value}
                                            onChange={handleRangeChange}
                                            className='rangeinput'
                                        />
                                        <h3>{value}</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <div className='calcutor'>
                                            <div>
                                                <Button
                                                    className="quality"
                                                    onClick={handleDecrement}
                                                    disabled={quantity <= minProductValue}
                                                >
                                                    -
                                                </Button>
                                                <span className="quantity">{quantity}</span>
                                                <Button
                                                    className="quality"
                                                    onClick={handleIncrement}
                                                    disabled={quantity >= maxProductValue}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className='mt-3 mb-3'>
                                    <Col sm={6}><h5>Total Price</h5></Col>
                                    <Col sm={6}><h6>₹ {totalPrice}</h6></Col>
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

