import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import offer4 from '../../assets/images/img/offer4.jpg'
import offer2 from '../../assets/images/img/offer2.jpg'
import offer3 from '../../assets/images/img/offer3.jpg'
import offerBG1 from '../../assets/images/banner/offer-bg1.png'
import offerBG2 from '../../assets/images/banner/offer-bg2.png'
import offerBG3 from '../../assets/images/banner/offer-bg3.png'
import offerBG4 from '../../assets/images/banner/offer-bg4.png'

const clinetreview = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
function Offersdetails(props) {
    return (
        <>
            <Header />
            <div className='allPage-bg'>
                <div className='section-padding'>
                    <div className='AllPage-area'>
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <h2>OFFERS DETAILS</h2>
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
                            <h4 className='main-heading text-center'>Best Offers</h4>
                            <p className='text-center'>Take a break with savings</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="offerDetails-item clean">
                                <img src={offer4} alt="image" />
                                <div className="Offeroverlay">
                                    <span>"</span>
                                    <span>NECKLACE <br />
                                        <b>70% OFF</b></span>
                                    <span />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="offerDetails-item clean">
                                <img src={offer2} alt="image" />
                                <div className="Offeroverlay">
                                    <span>"</span>
                                    <span>RINGS <br />
                                        <b>30% OFF</b></span>
                                    <span />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="offerDetails-item clean">
                                <img src={offer3} alt="image" />
                                <div className="Offeroverlay">
                                    <span>"</span>
                                    <span>BRACELETS<br />
                                        <b>50% OFF</b></span>
                                    <span />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>

            {/* <section className='section-padding'>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={clinetreview}
                    ssr={true} 
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    customTransition="all 1s"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className='offer-sliderarea'>
                        <img src={offerBG1} />
                        <div className='offer-sliderText'>
                            <h2>GET 20% DISCOUNT ON <br />
                                YOUR FIRST PRODUCT </h2>
                        </div>
                    </div>
                    <div className='offer-sliderarea'>
                        <img src={offerBG2} />
                        <div className='offer-sliderText'>
                            <h2>10% OFF ON <br />RINGS</h2>
                        </div>
                    </div>
                    <div className='offer-sliderarea'>
                        <img src={offerBG3} />
                        <div className='offer-sliderText'>
                            <h2>"bangles" <br />
                                GET 12% OFF*</h2>
                        </div>
                    </div>
                    <div className='offer-sliderarea'>
                        <img src={offerBG4} />
                        <div className='offer-sliderText'>
                            <h2>DISCOVER LATEST <br />
                                COLLECTIONS AND TOP DESIGNERS</h2>
                        </div>
                    </div>

                </Carousel>
            </section> */}
            <section className='aboutDifferent-bg'>
                <div className='section-padding'>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                <h2>What make us different</h2>
                                <p>A great About Us page helps builds trust between you and your customers.
                                    The more content you provide about you and your business, the more confi-dent
                                    people will be when purchasing from your store.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className='section-padding'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <h4 className='main-heading text-center'>All Offers</h4>
                            <p className='text-center'>Take a break with savings</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <div className="offerDetails-item second explode">
                                <img src={offer3} alt="image" />
                                <div className="Offeroverlay">
                                    <span>"</span>
                                    <span>BRACELETS<br />
                                        <b>50% OFF</b></span>
                                    <span />
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="offerDetails-item second explode">
                                <img src={offer3} alt="image" />
                                <div className="Offeroverlay">
                                    <span>"</span>
                                    <span>BRACELETS<br />
                                        <b>50% OFF</b></span>
                                    <span />
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="offerDetails-item second explode">
                                <img src={offer3} alt="image" />
                                <div className="Offeroverlay">
                                    <span>"</span>
                                    <span>BRACELETS<br />
                                        <b>50% OFF</b></span>
                                    <span />
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="offerDetails-item second explode">
                                <img src={offer3} alt="image" />
                                <div className="Offeroverlay">
                                    <span>"</span>
                                    <span>BRACELETS<br />
                                        <b>50% OFF</b></span>
                                    <span />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
            <Footer />
        </>
    )
}

export default Offersdetails