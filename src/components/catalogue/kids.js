import React, { useEffect, useState } from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap'
import cat1 from '../../assets/images/img/cat1.png'
import cat4 from '../../assets/images/img/cat4.png'
import cat7 from '../../assets/images/img/cat7.png'
import cat2 from '../../assets/images/img/cat2.png'
import cat3 from '../../assets/images/img/cat3.png'
import cat5 from '../../assets/images/img/cat5.png'
import cat6 from '../../assets/images/img/cat6.png'
import cat8 from '../../assets/images/img/cat8.png'
import catlog3 from '../../assets/images/img/catlog3.jpg'
import catlog6 from '../../assets/images/img/catlog6.jpg'
import catlogbg from '../../assets/images/banner/catlog-bg.png'
import product1 from '../../assets/images/img/product1.png'
import product2 from '../../assets/images/img/product2.png'
import product3 from '../../assets/images/img/product3.png'
import product4 from '../../assets/images/img/product4.png'
import product5 from '../../assets/images/img/product5.png'
import product6 from '../../assets/images/img/product6.png'
import bannertwo from '../../assets/images/banner/image 12.png'
import border from '../../assets/images/banner/border.png'
import { BASE_URL } from '../../Constant/Index'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Kids() {
    useEffect(() => {
        Kids()
    }, [])
    const [Kidsdata, setKidsData] = useState([])
    const Kids = () => {
        axios
            .get(`${BASE_URL}/auth/catalogue`)
            .then((response) => {
                console.log(response.data.data)
                setKidsData(response.data.data)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
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
                                <h4 className='main-heading text-center'>Catalogue</h4>
                                <div className='all-border'>
                                    <img src={border} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
           

            <section className=''>
                <Container>
                    <div className='catloggg'>
                        <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Gold Bangle</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Diamond Bangle</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-Ring" role="tab" aria-controls="pills-Ring" aria-selected="false">Gold Ring</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <Row>
                            {Kidsdata ? (
                        Kidsdata.map((item, index) => (
                            item.type === 'child' && (
                                <React.Fragment key={index}>
                                    <Row>
                                        <Col lg={3} className='mt-2 mb-2'>
                                            <div className='catlogOne'>
                                                <Row>
                                                    <Link to={"https://veejayjewels.com/storage/app/public/notification/"+item.file}>
                                                    <Col sm={12} className='mb-3'>
                                                        <img src={"https://veejayjewels.com/storage/app/public/notification/"+item.thumnail} />
                                                        <h2>{item.title}</h2>
                                                        <p>Read More</p>
                                                    </Col>
                                                    </Link>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </React.Fragment>
                            )
                        ))
                    ) : null}
                            </Row>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">dd</div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                            <div className="tab-pane fade" id="pills-Ring" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='section-padding'></section>
            <Footer />
        </>
    )
}
export default Kids

