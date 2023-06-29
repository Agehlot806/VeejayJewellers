// import React from 'react'
// import Header from '../../directives/header'
// import Footer from '../../directives/footer'
// import { Container, Row, Col } from 'react-bootstrap'
// import cat1 from '../../assets/images/img/cat1.png'
// import cat4 from '../../assets/images/img/cat4.png'
// import cat7 from '../../assets/images/img/cat7.png'
// import cat2 from '../../assets/images/img/cat2.png'
// import cat3 from '../../assets/images/img/cat3.png'
// import cat5 from '../../assets/images/img/cat5.png'
// import cat6 from '../../assets/images/img/cat6.png'
// import cat8 from '../../assets/images/img/cat8.png'

// import catlog3 from '../../assets/images/img/catlog3.jpg'
// import catlog6 from '../../assets/images/img/catlog6.jpg'
// import catlogbg from '../../assets/images/banner/catlog-bg.png'
// import product1 from '../../assets/images/img/product1.png'
// import product2 from '../../assets/images/img/product2.png'
// import product3 from '../../assets/images/img/product3.png'
// import product4 from '../../assets/images/img/product4.png'
// import product5 from '../../assets/images/img/product5.png'
// import product6 from '../../assets/images/img/product6.png'
// import bannertwo from '../../assets/images/banner/image 12.png'
// import border from '../../assets/images/banner/border.png'

// function Women() {
//     return (
//         <>
//             <Header />
//             <div className='allPage-bgtwo'>
//                 <Container fluid className='p-0'>
//                     <img src={bannertwo} />
//                 </Container>
//             </div>

//             <section className='section-padding'>
//                 <Container>
//                     <Row className="justify-content-center">
//                         <Col lg={9}>
//                             <div className='text-center'>
//                                 <h4 className='main-heading text-center'>Catalogue</h4>
//                                 <div className='all-border'>
//                                     <img src={border} />
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             <section className='section-padding'>
//                 <Container>
//                     <Row>
//                         <Col lg={3} className='mt-2 mb-2'>
//                             <div className='catlogOne'>
//                                 <Row>
//                                     <Col sm={12} className='mb-3'>
//                                         <img src={cat1} />
//                                         <h2>Earrings</h2>
//                                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                             industry.</p>
//                                     </Col>
//                                     <Col sm={12} className='mb-3'>
//                                         <img src={cat4} />
//                                         <h2>Earrings</h2>
//                                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                             industry.</p>
//                                     </Col>
//                                     <Col sm={12} className='mb-3'>
//                                         <img src={cat7} />
//                                         <h2>Earrings</h2>
//                                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                             industry.</p>
//                                     </Col>
//                                 </Row>
//                             </div>
//                         </Col>
//                         <Col lg={6} className='mt-2 mb-2'>
//                             <div className='catlogOne'>
//                                 <Row>
//                                     <Col sm={12} className='mb-3'>
//                                         <img src={cat2} />
//                                         <h2>Earrings</h2>
//                                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                             industry.</p>
//                                     </Col>
//                                     <Col sm={12} className='mb-3'>
//                                         <img src={cat5} />
//                                         <h2>Earrings</h2>
//                                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                             industry.</p>
//                                     </Col>
//                                 </Row>
//                             </div>
//                         </Col>
//                         <Col lg={3} className='mt-2 mb-2'>
//                             <div className='catlogOne'>
//                                 <Row>
//                                     <Col sm={12} className='mb-3'>
//                                         <img src={cat3} />
//                                         <h2>Earrings</h2>
//                                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                             industry.</p>
//                                     </Col>
//                                     <Col sm={12} className='mb-3'>
//                                         <img src={cat6} />
//                                         <h2>Earrings</h2>
//                                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                             industry.</p>
//                                     </Col>
//                                     <Col sm={12} className='mb-3'>
//                                         <img src={cat8} />
//                                         <h2>Earrings</h2>
//                                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting
//                                             industry.</p>
//                                     </Col>
//                                 </Row>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>


//             <Footer />
//         </>
//     )
// }

// export default Women


import React, { useEffect, useState } from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col, Nav, Tab, Tabs } from 'react-bootstrap'
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
function Women() {
    useEffect(() => {
        womens()
    }, [])
    const [womendata, setWomenData] = useState([])
    const womens = () => {
        axios
            .get(`${BASE_URL}/auth/catalogue`)
            .then((response) => {
                console.log(response.data.data)
                setWomenData(response.data.data)
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
            <section className='section-padding'>
                <Container>
                <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3 justify-content-center"
                >
                    <Tab eventKey="home" title="Home">
                        <Row>
                            {womendata ? (
                                womendata.map((item, index) => (
                                    item.type === 'women' && (
                                        <Col lg={3} className='mt-2 mb-2'>
                                            <div className='catlogOne'>
                                                <Row>
                                                    <Link to={"https://veejayjewels.com/storage/app/public/pdf/" + item.file}>
                                                        <Col sm={12} className='mb-3'>
                                                            <img src={"https://veejayjewels.com/storage/app/public/catalog/" + item.thumnail} />
                                                            <h2>{item.title}</h2>
                                                            <p>Read More</p>
                                                        </Col>
                                                    </Link>
                                                </Row>
                                            </div>
                                        </Col>
                                    )
                                ))
                            ) : null}
                        </Row>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <Container>
                            <Row>
                                {womendata ? (
                                    womendata.map((item, index) => (
                                        item.type === 'women' && (
                                            <Col lg={3} className='mt-2 mb-2'>
                                                <div className='catlogOne'>
                                                    <Row>
                                                        <Link to={"https://veejayjewels.com/storage/app/public/pdf/" + item.file}>
                                                            <Col sm={12} className='mb-3'>
                                                                <img src={"https://veejayjewels.com/storage/app/public/catalog/" + item.thumnail} />
                                                                <h2>{item.title}</h2>
                                                                <p>Read More</p>
                                                            </Col>
                                                        </Link>
                                                    </Row>
                                                </div>
                                            </Col>
                                        )
                                    ))
                                ) : null}
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
                </Container>
            </section>
            <Footer />
        </>
    )
}
export default Women