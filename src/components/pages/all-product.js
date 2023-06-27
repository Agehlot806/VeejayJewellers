import React, { useEffect, useState } from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import bangle1 from "../../assets/images/img/bangle1.png";
import product2 from "../../assets/images/img/product2.png";
import bangle3 from "../../assets/images/img/bangle3.png";
import bangle2 from "../../assets/images/img/bangle2.png";
import bangle4 from "../../assets/images/img/bangle4.png";
import chain1 from "../../assets/images/img/chain1.png";
import chain2 from "../../assets/images/img/chain2.png";
import product3 from "../../assets/images/img/product3.png";
import ring1 from "../../assets/images/img/ring1.png";
import ring2 from "../../assets/images/img/ring2.png";
import ring3 from "../../assets/images/img/ring3.png";
import ring4 from "../../assets/images/img/ring4.png";
import product5 from "../../assets/images/img/product5.png";
import { BASE_URL } from "../../Constant/Index";

function Allproduct() {
  const [allproduct, setallproduct] = useState([]);

  const cleanImageUrl = (imageUrl) => {
    // Remove square brackets and escape characters
    return imageUrl.replace(/[\[\]\\"]/g, "");
  };

  useEffect(() => {
    allProduct();
  }, []);

  const allProduct = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        // console.log(response.data);
        setallproduct(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <Header />
      <div className="allPage-bg">
        <div className="section-padding">
          <div className="AllPage-area">
            <Container>
              <Row>
                <Col lg={7}>
                  <h2>ALL PRODUCT'S</h2>
                  <Link to="">Shop now</Link>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <section className="section-padding">
        <Container>
          <Row>
            {allproduct.map((item) => (
              <Col lg={3} sm={6} className="mt-4 mb-5">
                <Link to={`/productaddcard/${item.id}`}>
                  <div className="bestseller-card">
                    <div className="bestseller-cardImg">
                      <img src={cleanImageUrl(item.image)} alt="" />
                    </div>
                  </div>
                  <div className="bestseller-cardText">
                    <h5>{item.name}</h5>
                    <p>{item.unit}</p>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star-o" />
                    </a>
                  </div>
                </Link>
              </Col>
            ))}
            {/* <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={chain1} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={ring1} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={ring2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product5} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product3} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={ring3} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={ring4} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={ring1} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={ring4} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={chain2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle1} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={chain2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>Bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product3} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle3} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle1} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle4} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle4} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>                     
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle3} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>bangle "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle1} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle4} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={bangle4} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className='mb-5'>
                            <div className='bestseller-card'>
                                <div className='bestseller-cardImg'>
                                    <img src={product2} />
                                </div>

                            </div>
                            <div className='bestseller-cardText'>
                                <h5>NECKLACE "MURATO"</h5>
                                <p>15gms</p>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star-o" /></a>
                            </div>
                        </Col> */}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Allproduct;
