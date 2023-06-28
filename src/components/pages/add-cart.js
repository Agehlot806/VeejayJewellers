import React from 'react'
import Header from '../../directives/header'
import { Col, Row } from 'react-bootstrap'
import ring2 from '../../assets/images/img/ring2.png'

function Addcart() {
    return (
        <>
            <Header />

            <section className="section-padding">
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <div className='add-cart'>
                            <div>
                                <img src={ring2} />
                            </div>
                            <div>
                                <h2>Gold Ring</h2>
                                <h5>Weight 10gms</h5>
                                <p>Size: 2.5 <span>Quantity: 4</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Addcart