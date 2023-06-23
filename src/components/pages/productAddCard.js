import React, { useState } from 'react'
import Header from '../../directives/header'
import { Col, Container, Row, Form } from 'react-bootstrap'
import product6 from '../../assets/images/img/product6.png'
import Footer from '../../directives/footer';
import { Link } from 'react-router-dom';

function ProductAddCard() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <Header />
            <section className='section-padding'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className='add-cards'>
                                <Row>
                                    <Col><h5>Gold Earrings</h5></Col>
                                    <Col><h6>10 gms</h6></Col>
                                </Row>
                                <div className='text-center'>
                                    <img src={product6} />
                                    <h5>Gold Current Price</h5>
                                    <h4>₹ 59,400</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col lg={6}>
                            <div className='addCard-conaty'>
                                <Row>
                                    <Col><h5>Pcs Quantity</h5></Col>
                                    <Col>
                                        <div className='quantity-btn'>
                                            <button onClick={handleDecrement}>-</button>
                                            <span>{quantity}</span>
                                            <button onClick={handleIncrement}>+</button>
                                        </div>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col><h5>Size</h5></Col>
                                    <Col>
                                        <div className='quantity-btn'>
                                            <Form.Select aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='addCard-conaty'>
                                <Row>
                                    <Col><h5>Pcs Quantity</h5></Col>
                                    <Col>
                                        <div className='quantity-btn'>
                                            <button onClick={handleDecrement}>-</button>
                                            <span>{quantity}</span>
                                            <button onClick={handleIncrement}>+</button>
                                        </div>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col><h5>Size</h5></Col>
                                    <Col>
                                        <div className='quantity-btn'>
                                            <Form.Select aria-label="Default select example">
                                                <option>Open this select menu</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </Form.Select>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <div className='add-btn'>
                        <Link to=''>Add to cart</Link>
                    </div>
                    <div className='add-Itemsbtn'>
                        <Link to=''>Add Items</Link>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default ProductAddCard