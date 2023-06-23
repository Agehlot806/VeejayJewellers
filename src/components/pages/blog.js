import React from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col } from 'react-bootstrap';
import blog1 from '../../assets/images/img/blog1.webp'
import blog2 from '../../assets/images/img/blog2.webp'
import blog3 from '../../assets/images/img/blog3.webp'

function Blog() {
    return (
        <>
            <Header />
            <div className='allPage-bg'>
                <div className='section-padding'>
                    <div className='AllPage-area'>
                        <Container>
                            <Row>
                                <Col lg={7}>
                                    <h2>BLOG</h2>
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
                        <Col lg={7}>
                                <h4 className='main-heading text-center'>Blog News</h4>
                                <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} className="mt-2 mb-2">
                            <div className='blog-card'>
                                <img src={blog1} />
                                <div className='blog-cardContent'>
                                    <h3>Mothers day special gifting guide</h3>
                                    <p>Personalized Jewelry: Consider gifting a piece of jewelry, such as a
                                        necklace or bracelet, with her initials,...</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                            <div className='blog-card'>
                                <img src={blog2} />
                                <div className='blog-cardContent'>
                                    <h3>Mothers day special gifting guide</h3>
                                    <p>Personalized Jewelry: Consider gifting a piece of jewelry, such as a
                                        necklace or bracelet, with her initials,...</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                            <div className='blog-card'>
                                <img src={blog3} />
                                <div className='blog-cardContent'>
                                    <h3>Mothers day special gifting guide</h3>
                                    <p>Personalized Jewelry: Consider gifting a piece of jewelry, such as a
                                        necklace or bracelet, with her initials,...</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                            <div className='blog-card'>
                                <img src={blog1} />
                                <div className='blog-cardContent'>
                                    <h3>Mothers day special gifting guide</h3>
                                    <p>Personalized Jewelry: Consider gifting a piece of jewelry, such as a
                                        necklace or bracelet, with her initials,...</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                            <div className='blog-card'>
                                <img src={blog2} />
                                <div className='blog-cardContent'>
                                    <h3>Mothers day special gifting guide</h3>
                                    <p>Personalized Jewelry: Consider gifting a piece of jewelry, such as a
                                        necklace or bracelet, with her initials,...</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                            <div className='blog-card'>
                                <img src={blog3} />
                                <div className='blog-cardContent'>
                                    <h3>Mothers day special gifting guide</h3>
                                    <p>Personalized Jewelry: Consider gifting a piece of jewelry, such as a
                                        necklace or bracelet, with her initials,...</p>
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

export default Blog