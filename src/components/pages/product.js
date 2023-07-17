import React, { useEffect, useState } from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Constant/Index";
import bannertwo from '../../assets/images/banner/image 12.png'
import image14 from '../../assets/images/banner/image 14.png'
import image15 from '../../assets/images/banner/image 15.png'
// import ApiHelper from '../utils/ApiHelper';
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
  const [allproduct, setallproduct] = useState([]);
  const [thirdbanner, setthirdbanner] = useState([])
  useEffect(() => {
    categorys();
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
  const [data, setData] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [filter, setFilter] = useState(false);
  const handleDataList = async (name) => {
    console.log(name);
    setData(name)
    try {
      const response = await fetch(
        "https://veejayjewels.com/api/v1/products/latest"
      );
      const jsonData = await response.json();
      // Access nested data
      const nestedData = jsonData.data;
      // Filter the nested data based on brand
      const filteredData = nestedData.filter((item) => item.brand === name);
      setDataList(filteredData);
      setFilter(true);
    } catch (error) {
      console.log("Errorr", error);
    }
  };

  useEffect(() => {
    arhaProduct()
  }, [])
  const [arhadata, setarhadata] = useState([])
  const arhaProduct = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        console.log(response.data.data)
        setarhadata(response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const [image, setimage] = useState("");
  const [file, setfile] = useState("");
  const [title, settitle] = useState("");
  const [check, setCheck] = useState();
  const SubCategory = (thumnail, title, file) => {
    console.log("categoery", thumnail, title);
    setimage(thumnail)
    settitle(title)
    setfile(file)
  };

  const handleCheck = () => {
    setCheck(24);
  }
  console.log("4t", check);
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
                          <Nav.Link eventKey={item.name}
                            onClick={(e) => handleDataList(item.name)}
                          >
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
                      <label>Select Gold Karat
                      </label>
                      <div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                          <label className="form-check-label" htmlFor="inlineCheckbox1">18</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                          <label className="form-check-label" htmlFor="inlineCheckbox2">22</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option3" onClick={handleCheck} />
                          <label className="form-check-label" htmlFor="inlineCheckbox3">24</label>
                        </div>
                      </div>
                      {/* <input
                          type="range"
                          min={0}
                          max={1000000}
                          value={value}
                          onChange={handleRangeChange}
                          className='rangeinput'
                        />
                        <div className="text-center">
                          <h2>₹ {value}</h2>
                        </div> */}
                    </div>
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
                      {/* {allproduct.map((item) => (
                        <Col lg={4} sm={4} xs={6} className="mb-4">
                          <div className="mainProductcard" key={item.id}>
                            <Link to={`/product-details/${item.id}`}>
                              <img src={cleanImageUrl(item.image)} />
                              <h4>{item.name}</h4>
                              <p>{item.unit}</p>
                              <div className="product-btnarea">
                                <Link to="/add-to-cart" className="product-addBtn">
                                  Add To Cart
                                </Link>
                              </div>
                            </Link>
                          </div>
                        </Col>
                      ))} */}

                      {allproduct.map((item) => (
                        <Col lg={4} sm={4} xs={6} className="mb-4" key={item.id}>
                          {check == "24" && item.purity == "24k" ?
                            <div className="mainProductcard">
                              <Link to={`/product-details/${item.id}`}>
                                <img src={cleanImageUrl(item.image)} />
                                <h4>{item.name}</h4>
                                <p>{item.unit_value} {item.unit}</p>
                                <span>Karat : {item.purity}</span>
                                <div className="product-btnarea">
                                  <Link to="/add-to-cart" className="product-addBtn">
                                    Add To Cart
                                  </Link>
                                </div>
                              </Link>
                            </div>
                            :
                                <div className="mainProductcard">
                                  <Link to={`/product-details/${item.id}`}>
                                    <img src={cleanImageUrl(item.image)} />
                                    <h4>{item.name}</h4>
                                    <p>{item.unit_value} {item.unit}</p>
                                    <span>Karat : {item.purity}</span>
                                    <div className="product-btnarea">
                                      <Link to="/add-to-cart" className="product-addBtn">
                                        Add To Cart
                                      </Link>
                                    </div>
                                  </Link>
                                </div>
                          }

                        </Col>
                      ))
                      }

                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey={data}>
                    <Row>
                      <div className="brands-tabs-all">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="arhaallproduct-tab" data-toggle="pill" href="#arhaallproduct" role="tab" aria-controls="arhaallproduct" aria-selected="true">All Products</a>
                          </li>
                          {arhadata ? (
                            arhadata.map((item, index) => (
                              item.brand === 'Araha' && (
                                <li className="nav-item">
                                  <a className="nav-link" id="pills-arha-tab" data-toggle="pill" href="#pills-arha" role="tab" aria-controls="pills-profile" aria-selected="false">
                                    <div onClick={(e) => SubCategory(item.thumnail, item.title, item.file)}
                                    >{item.name}</div>
                                  </a>
                                </li>
                              )
                            ))
                          ) : null}

                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                          <div className="tab-pane fade show active" id="arhaallproduct" role="tabpanel" aria-labelledby="arhaallproduct-tab">
                            <Row>
                              {filter && dataList ? (
                                dataList.map((item) => (
                                  <Col lg={4} className="mb-4" key={item.id}>
                                    <div className="mainProductcard">
                                      <Link to={`/product-details/${item.id}`}>
                                        <img src={cleanImageUrl(item.image)} alt={item.name} />
                                        <h4>{item.name}</h4>
                                        <p>{item.unit_value} {item.unit}</p>
                                        <span>Karat : {item.purity}</span>
                                        <div className="product-btnarea">
                                          <Link to="/add-to-cart" className="product-addBtn">
                                            Add To Cart
                                          </Link>
                                        </div>
                                      </Link>
                                    </div>
                                  </Col>
                                ))
                              ) : (
                                <div>No data available.</div>
                              )}
                            </Row>
                          </div>
                          <div className="tab-pane fade" id="pills-arha" role="tabpanel" aria-labelledby="pills-arha-tab">
                            <Row>
                              {arhadata ? (
                                arhadata.map((item, index) => (
                                  item.brand === 'Araha' && (
                                    <Col lg={4} className="mb-4" key={item.id}>
                                      <div className="mainProductcard">
                                        <Link to={`/product-details/${item.id}`}>
                                          <img src={cleanImageUrl(item.image)} alt={item.name} />
                                          <h4>{item.name}</h4>
                                          <p>{item.unit}</p>
                                          <div className="product-btnarea">
                                            <Link to="/add-to-cart" className="product-addBtn">
                                              Add To Cart
                                            </Link>
                                          </div>
                                        </Link>
                                      </div>
                                    </Col>
                                  )
                                ))
                              ) : null}
                            </Row>
                          </div>
                        </div>
                      </div>


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