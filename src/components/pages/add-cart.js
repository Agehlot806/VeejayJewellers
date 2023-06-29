import React from 'react'
import Header from '../../directives/header'
import { Button, Col, Row } from 'react-bootstrap'
import ring2 from '../../assets/images/img/ring2.png'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'
import border from '../../assets/images/banner/border.png'
function Addcart() {
    return (
        <>
            <Header />
            <section className="section-padding">
                <Row className="justify-content-center mb-3">
                    <Col lg={10}>
                            <div className='add-card-AREA'>
                                <div className='add-cart'>
                                    <div>
                                        <img src={ring2} />
                                    </div>
                                    <div className='add-cart-content'>
                                        <h2>Gold Ring</h2>
                                        <h5>Weight 10gms</h5>
                                        <p>Size: 2.5 <span>Quantity: 4</span></p>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={10}></Col>
                                    <Col lg={2}><h5 className='p-2'>Weight 40gms</h5></Col>
                                   </Row>
                                <div className=''>
                                    <img src={border} />
                                </div>
                                <div className='add-cart'>
                                    <div>
                                        <img src={ring2} />
                                    </div>
                                    <div className='add-cart-content'>
                                        <h2>Gold Ring</h2>
                                        <h5>Weight 10gms</h5>
                                        <p>Size: 2.5 <span>Quantity: 4</span></p>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={10}></Col>
                                    <Col lg={2}><h5 className='p-2'>Weight 40gms</h5></Col>
                                   </Row>
                                <div className=''>
                                    <img src={border} />
                                </div>
                                <div className='add-cart'>
                                    <div>
                                        <img src={ring2} />
                                    </div>
                                    <div className='add-cart-content'>
                                        <h2>Gold Ring</h2>
                                        <h5>Weight 10gms</h5>
                                        <p>Size: 2.5 <span>Quantity: 4</span></p>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={10}></Col>
                                    <Col lg={2}><h5 className='p-2'>Weight 40gms</h5></Col>
                                   </Row>
                                <div className=''>
                                    <img src={border} />
                                </div>
                                <Row>
                            <Col lg={9}></Col>
                            <Col lg={3}>  <h5> Total Weight - 120gm</h5></Col>
                        </Row>
                            </div>
                        <div className='text-center'>
                    <Link to='/check-invoice' className="showSize">
                        Submit
                    </Link>
                    </div>
                    </Col>
                </Row>
            </section>
            <Footer />
        </>
    )
}
export default Addcart

