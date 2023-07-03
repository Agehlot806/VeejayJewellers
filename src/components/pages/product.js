import React, { useEffect, useState } from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
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
const clinetreview = {
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
function Product(props) {
  const { id, name } = useParams();
  console.log("name", name);
  const [brandcategories, setbrandcategories] = useState([]);
  const [latestsapidatashow, setLatestsapidata] = useState([]);
  const [allproduct, setallproduct] = useState([]);
  const [thirdbanner, setthirdbanner] = useState([])

  useEffect(() => {
    categorys();
    latestsapidata();
    allProduct();
    thirdBanner();
  }, []);
  const categorys = () => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((response) => {
        console.log(response.data);
        setbrandcategories(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };


  console.log("brandcategories", brandcategories);
  const latestsapidata = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        console.log(response.data);
        setLatestsapidata(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const [sameid, setSameId] = useState([])
  // console.log("ID:", id);
  const customerData = latestsapidatashow.find((customer) => customer.category_ids == sameid)
  console.log("latestsapidatashow", customerData);
  const handleNavItemClick = (event, Id) => {
    event.preventDefault();
    console.log("Clicked product ID:", Id);
    setSameId(Id)
    // Perform any desired actions with the product ID
  };
  const cleanImageUrl = (imageUrl) => {
    // Remove square brackets and escape characters
    return imageUrl.replace(/[\[\]\\"]/g, "");
  };
  const allProduct = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        console.log(response.data);
        setallproduct(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
 const thirdBanner = () => {
    axios
      .get(`${BASE_URL}/banners1`)
      .then((response) => {
        console.log(response.data.data)
        setthirdbanner(response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const [value, setValue] = useState(50);

  const handleRangeChange = (event) => {
    setValue(event.target.value);
  };
  const [selectedValue, setSelectedValue] = useState("");
  const minProductValue = 1; // Minimum value for the quantity
  const maxProductValue = 50; // Maximum value for the quantity
  const [quantity, setQuantity] = useState(minProductValue);
  const handleIncrement = () => {
    if (quantity < maxProductValue) {
      setQuantity(quantity + 1);
    }
  };
  const handleDecrement = () => {
    if (quantity > minProductValue) {
      setQuantity(quantity - 1);
    }
  };
  const totalPrice = quantity * value;
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (
    <>
      <Header />
      <div className='allPage-bgtwo'> <Container fluid className='p-0'> <img src={bannertwo} /> </Container> </div>
      <section className="section-padding">
        <Container>


          <Tab.Container id="left-tabs-example" defaultActiveKey="AllProduct">
            <Row className="mt-4">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column brand-cate-list">
                  <div className="tabBrands">
                    <h3>Brand</h3>
                    <Nav.Item>
                      <Nav.Link eventKey="AllProduct">All Product</Nav.Link>
                    </Nav.Item>
                    {brandcategories ? (
                      brandcategories.map((item, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={item.id} onClick={(event) => handleNavItemClick(event, item.id)}>
                            {item.name}
                          </Nav.Link>
                        </Nav.Item>
                      ))
                    ) : null}

                    <h3>Sort by</h3>
                    <div className="checkbox-bg">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                          Last First
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                          Oldest First
                        </label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios3">
                          Gross Wt high to Low
                        </label>
                      </div>

                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios4">
                          Gross Wt Low to high
                        </label>
                      </div>
                    </div>

                    <h3>Filter</h3>
                    <div className="range-bg">
                      <label>18 carat gold

                      </label>
                      <input
                        type="range"
                        min={0}
                        max={1000000}
                        value={value}
                        onChange={handleRangeChange}
                        className='rangeinput'
                      />
                      <div className="text-center">
                        <h2>₹ {value}</h2>
                      </div>
                    </div>

                    {/* <main>
        <input type="range" className="win10-thumb" />
        <input type="range" className="win10-thumb" min={0} max={100} defaultValue={25} step={5} />
        <input type="range" className="win10-thumb" disabled defaultValue={64} />
        <input type="range" />
        <input type="range" min={0} max={100} defaultValue={40} step={5} />
        <input type="range" disabled defaultValue={80} />
      </main> */}

                    {/* <div className="range-bg">
                      <label>18 carat gold

                      </label>
                      <input
                        type="range"
                        min={0}
                        max={1000000}
                        value={value}
                        onChange={handleRangeChange}
                        className='rangeinput'
                      />
                      <div className="text-center">
                        <h2>₹ {value}</h2>
                      </div>
                    </div> */}

                  </div>
                </Nav>
                <div className="product-banner">
                  <img src={image15} />
                </div>


                <div className="tabBrands">
                  <h3>Catalogue</h3>

                  <h5>Bangle</h5>
                  <h5>Ring</h5>
                  <h5>bracelets</h5><h5>Gold</h5><h5>NECKLACE</h5>
                </div>

                <div className="product-banner">
                  <img src={image14} />
                </div>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="AllProduct">
                    <Row>
                      {allproduct.map((item) => (
                        <Col lg={4} sm={4} xs={6} className="mb-4">
                          <div className="mainProductcard" key={item.id}>
                            <img src={cleanImageUrl(item.image)} />
                            <h4>{item.name}</h4>
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
                            <div className="product-btnarea">
                              <Link to={`/product-details/${item.id}`} className="product-addBtn">
                                Add To Cart
                              </Link>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="V’DANA">
                    <Row>

                      <Col lg={4} sm={4} xs={6} className="mb-4">
                        <div className="mainProductcard">
                          <img src={ring1} />
                          <h4>Bangle "MURATO"</h4>
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
                            <Link to="/product-details" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="IRKA">
                    <Row>
                    <Col lg={4} sm={4} xs={6} className="mb-4">
                        <div className="mainProductcard">
                          <img src={ring1} />
                          <h4>Bangle "MURATO"</h4>
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
                            <Link to="/product-details" className="product-addBtn">
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Ladies bracelets">
                    <Row>
                      <Col lg={4} sm={6} xs={6} className="mb-5">
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
                      <Col lg={4} sm={6} xs={6} className="mb-5">
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
                      <Col lg={4} sm={6} xs={6} className="mb-5">
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
                      <Col lg={4} sm={6} xs={6} className="mb-5">
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
                      <Col lg={4} sm={6} xs={6} className="mb-5">
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
                      <Col lg={4} sm={6} xs={6} className="mb-5">
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
                      <Col lg={4} sm={6} xs={6} className="mb-5">
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
                      <Col lg={4} sm={6} xs={6} className="mb-5">
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
                      <Col lg={4} sm={6} xs={6} className="mb-5">
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
                      <Col lg={4} sm={6} xs={6} className="mb-5">
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
      <section className="">
        <Container fluid className="p-0">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={clinetreview}
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

            {thirdbanner ? (
              thirdbanner.map((item, index) => (
                item.type === 'thrid' && (
                  <div key={item.id} className="homeBack-bg">
                    <img src={item.image} alt="" />
                  </div>
                )
              ))
            ) : null}
          </Carousel>
        </Container>

      </section>
      <Footer />
    </>
  );
}

export default Product;
