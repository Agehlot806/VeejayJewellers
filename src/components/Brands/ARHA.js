import React, { useEffect, useState } from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import bangle1 from "../../assets/images/img/bangle1.png";
import product2 from "../../assets/images/img/product2.png";
import bangle4 from "../../assets/images/img/bangle4.png";
import bangle2 from "../../assets/images/img/bangle2.png";
import product1 from "../../assets/images/img/product1.png";
import ring2 from "../../assets/images/img/ring2.png";
import ring3 from "../../assets/images/img/ring3.png";
import ring4 from "../../assets/images/img/ring4.png";
import chain1 from "../../assets/images/img/chain1.png";
import chain2 from "../../assets/images/img/chain2.png";
import { BASE_URL } from "../../Constant/Index";
import bannertwo from '../../assets/images/banner/image 12.png'
import image14 from '../../assets/images/banner/image 14.png'
import image15 from '../../assets/images/banner/image 15.png'
import ring1 from '../../assets/images/img/ring1.png'
import Carousel from "react-multi-carousel";
const ourstore = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function ARHA(props) {
  const { id, name } = useParams();
  console.log("name", name);
  const [brandcategories, setbrandcategories] = useState([]);

  useEffect(() => {
    categorys();
  }, []);

  const categorys = () => {
    axios
      .get(`${BASE_URL}/categories/childes/${id}`)
      .then((response) => {
        console.log(response.data);
        setbrandcategories(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log("brandcategories", brandcategories);
  return (
    <>
      <Header />
      <div className='allPage-bgtwo'> <Container fluid className='p-0'> <img src={bannertwo} /> </Container> </div>
      <section className="section-padding">
        <Container>


          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="mt-4">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column brand-cate-list">
                  <div className="tabBrands">
                    <h3>Brand</h3>
                    {/* {brandcategories &&
                    brandcategories.map((item) => ( */}
                    <Nav.Item>
                      <Nav.Link eventKey="first">ARHA</Nav.Link>
                    </Nav.Item>
                    {/* ))} */}

                    <Nav.Item>
                      <Nav.Link eventKey="V’DANA">V’DANA</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="IRKA">IRKA</Nav.Link>
                    </Nav.Item>
                  </div>
                </Nav>
                <div className="product-banner">
                  <img src={image15} />
                </div>

                
                <div className="tabBrands">
                  <h3>New Arrivals</h3>
                  <div className="newArrivals">
                    <div><img src={ring1} /></div>
                    <div className="newArrivals-content">
                      <h5>Gold bangle</h5>
                      <h6>weight 10gms</h6>
                      <p>Size : 2.5 <span>Quantity : 4</span></p>
                    </div>
                  </div>
                  <div className="newArrivals">
                    <div><img src={bangle4} /></div>
                    <div className="newArrivals-content">
                      <h5>Gold bangle</h5>
                      <h6>weight 10gms</h6>
                      <p>Size : 2.5 <span>Quantity : 4</span></p>
                    </div>
                  </div>
                  <div className="newArrivals">
                    <div><img src={ring3} /></div>
                    <div className="newArrivals-content">
                      <h5>Gold bangle</h5>
                      <h6>weight 10gms</h6>
                      <p>Size : 2.5 <span>Quantity : 4</span></p>
                    </div>
                  </div>
                  <div className="newArrivals">
                    <div><img src={ring2} /></div>
                    <div className="newArrivals-content">
                      <h5>Gold bangle</h5>
                      <h6>weight 10gms</h6>
                      <p>Size : 2.5 <span>Quantity : 4</span></p>
                    </div>
                  </div>
                </div>

                <div className="product-banner">
                  <img src={image14} />
                </div>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={product2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={product2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="V’DANA">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring3} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="IRKA">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={chain1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={chain2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={chain2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Ladies bracelets">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle4} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={product2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle4} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Flexible bracelets">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring4} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={ring4} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Calcutti bangles">
                    <Row>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={bangle1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>Bangle "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={product1} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="mb-5">
                        <div className="bestseller-card">
                          <div className="bestseller-cardImg">
                            <img src={product2} />
                          </div>
                        </div>
                        <div className="bestseller-cardText">
                          <h5>NECKLACE "MURATO"</h5>
                          <p>15gms</p>
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
                          <div className="product-btnarea">
                            <Link to="" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>


        </Container>
      </section>
      <section className="section-padding ourStore-bg">
        <Container className="p-0">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={ourstore}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <Row>
              <Col lg={5} sm={5}>
                <div className="ourStore-gift">
                  <img src={product1} />
                  <h4>Make A gift</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                    integer lorem amet arcu egestas congue. Rhoncus scelerisque m
                    aenean.
                  </p>
                </div>
              </Col>
              <Col lg={7} sm={7}>
                <div className="ourStore-gift">
                  <h4>Our Store</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                    integer lorem amet arcu egestas congue. Rhoncus scelerisque m
                    aenean ac. Cursus in at sagittis vivamus Rhoncus scelerisque m
                  </p>
                </div>
                <div className="text-center mt-5">
                  <Link to="" className="main-btn">
                    <i className="fa fa-angle-double-right" /> Find out more
                  </Link>
                </div>
              </Col>
            </Row>
          </Carousel>
        </Container>

      </section>
      <Footer />
    </>
  );
}

export default ARHA;
