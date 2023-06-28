import React from 'react'
import Header from '../../directives/header'
import { Col, Row, Table } from 'react-bootstrap'
import ring2 from '../../assets/images/img/ring2.png'
import Footer from '../../directives/footer'
import border from "../../assets/images/banner/border.png";
import { Link } from 'react-router-dom'

function Checkinvoice() {
    return (
        <>
            <Header />
            <section className="section-padding">
                <Row className="justify-content-center mb-3">
                    <Col lg={5}>
                        <Table responsive className="productDetailTable">
                            <tbody>
                                <tr>
                                    <th>Product Name</th>
                                    <td>Gold Ring</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>2.5</td>
                                </tr>
                                <tr>
                                    <th>Quantity</th>
                                    <td>4 Pcs</td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>10 gms</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="add-border">
                            <img src={border} />
                        </div>
                    </Col>

                </Row>
                <Row className="justify-content-center mb-3">
                    <Col lg={5}>
                        <Table responsive className="productDetailTable">
                            <tbody>
                                <tr>
                                    <th>Product Name</th>
                                    <td>Gold Ring</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>2.5</td>
                                </tr>
                                <tr>
                                    <th>Quantity</th>
                                    <td>4 Pcs</td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>10 gms</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="add-border">
                            <img src={border} />
                        </div>
                    </Col>

                </Row>
                <div className='text-center'>
                    <Link to='/order-invoice' className="showSize">
                        Check Invoice
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Checkinvoice