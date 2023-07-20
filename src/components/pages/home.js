import React, { useEffect, useState } from "react";
import Header from "../../directives/header";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Carousel from "react-multi-carousel";
import "animate.css/animate.min.css";
import axios from "axios";
import home from "../../assets/images/img/home1.png";
import imgIcon1 from "../../assets/images/img-icon/icon1.png";
import imgIcon2 from "../../assets/images/img-icon/icon2.png";
import imgIcon3 from "../../assets/images/img-icon/icon3.png";
import product1 from "../../assets/images/img/product1.png";
import product2 from "../../assets/images/img/product2.png";
import product3 from "../../assets/images/img/product3.png";
import product4 from "../../assets/images/img/product4.png";
import product5 from "../../assets/images/img/product5.png";
import product6 from "../../assets/images/img/product6.png";
import blog1 from "../../assets/images/img/blog1.webp";
import img2 from "../../assets/images/img/img2.png";
import img3 from "../../assets/images/img/img3.png";
import img4 from "../../assets/images/img/img4.png";
import img5 from "../../assets/images/img/img5.png";
import Group1 from "../../assets/images/img/Group1.png";
import Group2 from "../../assets/images/img/Group2.png";
import Group3 from "../../assets/images/img/Group3.png";
import biglogo from "../../assets/images/logo/biglogo.png";
import abouthome from "../../assets/images/img/abouthome.png";
import aboutimgicon from "../../assets/images/img/aboutimgicon.png";

import Footer from "../../directives/footer";
import border from "../../assets/images/banner/border.png";
import send from "../../assets/images/icons/send.png";
import { Fade } from "react-reveal";
import homeBanner2 from "../../assets/images/banner/home-banner2.png";
import { BASE_URL } from "../../Constant/Index";
import "../../assets/css/alert.css";

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

const newArrivals = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function Home(props) {
  const [brandcategories, setbrandcategories] = useState([]);
  const [latestproduct, setlatestproduct] = useState([]);
  const [allproduct, setallproduct] = useState([]);
  const [posts, setPosts] = useState([]);
  const [videos, setVideoUrls] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [data, setData] = useState([]);
  const [secondbanner, setsecondbanner] = useState([]);
  const [thirdbanner, setthirdbanner] = useState([]);
  const [bangledata, setbangledata] = useState([]);

  const [showAlert, setShowAlert] = useState(localStorage.getItem("status"));
  // const profile = localStorage.getItem("profileImage");
  const handleDismiss = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    // Fetch the data
    fetch(`${BASE_URL}/banners1`)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data))
      .catch((error) => console.error("An error occurred:", error));
  }, []);

  useEffect(() => {
    categorys();
    fetchBlogs();
    fetchlatestProduct();
    fetchnewProduct();
    secondBanner();
    bangleProduct();
    thirdBanner();
    banglethirds();
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/banners1`)
      .then((response) => {
        // setVideo(response.data.data[6].image);
        const videoUrl = response.data.data[6].image;
        setVideoUrl(videoUrl);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/blog`);
      const data = await response.json();
      const latestPosts = data.data.slice(0, 3);
      setPosts(latestPosts);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchlatestProduct = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/latest`);
      const data = await response.json();
      const latestPosts = data.data.slice(0, 8);
      console.log("22222", data);
      setlatestproduct(latestPosts);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchnewProduct = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/latest`);
      const data = await response.json();
      const latestPosts = data.data.slice(0, 4);
      setallproduct(latestPosts);
    } catch (error) {
      console.log(error);
    }
  };

  const cleanImageUrl = (imageUrl) => {
    // Remove square brackets and escape characters
    return imageUrl.replace(/[\[\]\\"]/g, "");
  };

  const categorys = () => {
    axios
      .get(`https://veejayjewels.com/api/v1/categories`)
      .then((response) => {
        setbrandcategories(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // console.log("brandcategoriesbrandcategories", data);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/banners1`)
      .then((response) => {
        // setVideo(response.data.data[6].image);
        // const videoUrl = response.data.data[5].image
        setVideoUrls(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const secondBanner = () => {
    axios
      .get(`${BASE_URL}/banners1`)
      .then((response) => {
        console.log(response.data.data);
        setsecondbanner(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const thirdBanner = () => {
    axios
      .get(`${BASE_URL}/banners1`)
      .then((response) => {
        console.log(response.data.data);
        setthirdbanner(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const bangleProduct = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/latest`);
      const data = await response.json();
      const latestPosts = data.data.slice(0, 3);
      setbangledata(latestPosts);
    } catch (error) {
      console.log(error);
    }
  };

  const [banglethirddata, setbanglethirdData] = useState([]);
  const banglethirds = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        console.log(response.data.data);
        setbanglethirdData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <>
      <Header />

      {/* <div id="rssBlock">
        <p className="cnnContents">
          <a className="marqueeStyle">
            &nbsp;gold current price 10gms : ₹ 59,410
          </a>
          <a className="marqueeStyle">
            &nbsp;gold current price 10gms : ₹ 59,410
          </a>
          <a className="marqueeStyle">
            &nbsp;gold current price 10gms : ₹ 55,000
          </a>
          <a className="marqueeStyle">
            &nbsp;gold current price 10gms : ₹ 71,000
          </a>
          <a className="marqueeStyle">
            &nbsp;gold current price 10gms : ₹ 59,410
          </a>
        </p>
      </div> */}

      <div className="home-bg">
        <div className="home-area">
          <Container>
            <Row className="justify-content-center">
              <Col lg={4}>
                {showAlert === "unverified" && (
                  <div className="verified-area" role="alert">
                    {/* <button type="button" className="close" onClick={handleDismiss}>
                      <span aria-hidden="true">&times;</span>
                    </button> */}
                    <h5>Verification Request</h5>
                    <h6>You are not verified</h6>
                    <div className="ok-btn">
                      <button onClick={handleDismiss}>OK</button>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
            <Row>
              <Col lg={7} sm={7}>
                <div className="home-content">
                  <h1>Veejay Jewels</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet integer lorem amet arcu egestas congue. Rhoncus
                    scelerisque mi, ac sed lacus aliquam at tortor. Risus nulla
                    massa ut vitae phasellus dictum.
                  </p>
                  <Link to="/login">Login</Link>
                  <Link to="/custom-design">
                    <i className="fa fa-qrcode" /> Custom design
                  </Link>
                </div>
              </Col>
              <Col lg={5} sm={5} className="align-self-center">
                <img src={biglogo} />
              </Col>
            </Row>
          </Container>
          <div className="espslandingbg">
            <div className="a-one animate" />
            <div className="a-two animate" />
            <div className="a-three animate" />
            <div className="a-four animate" />
            <div className="a-five animate" />
            <div className="a-six animate" />
            <div className="a-seven animate" />
            <div className="a-eight animate" />
            <div className="a-nine animate" />
            <div className="a-ten animate" />
          </div>
        </div>
      </div>

      <section className=" details-area">
        <Container>
          <Row>
            <Col lg={4} sm={4} xs={6} className="mb-4">
              <div className="details-card">
                <img src={imgIcon1} />
                <h3>amazing Value every day</h3>
                <p>Items Prices that fit your Budget </p>
              </div>
            </Col>
            <Col lg={4} sm={4} xs={6} className="mb-4">
              <div className="details-card">
                <img src={imgIcon2} />
                <h3>Successful Customer Service</h3>
                <p>Items Prices that fit your Budget </p>
              </div>
            </Col>
            <Col lg={4} sm={4} xs={6} className="mb-4">
              <div className="details-card">
                <img src={imgIcon3} />
                <h3>Successful Customer Service</h3>
                <p>Items Prices that fit your Budget </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container>
          <div className="aboutHome">
            <h3>About us</h3>
            <img src={border} />
          </div>
          <div className="main-space">
            <Row>
              <Col lg={5} sm={5}>
                <div className="abouthome-content">
                  <h5>Silver-Dimonds Earrings </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet integer lorem amet arcu egestas congue.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Amet integer
                    lorem amet arcu egestas congue. Rhoncus scelerisque m aenean
                    ac. Cursus in at sagittis vivamus Rhoncus scelerisque m{" "}
                  </p>
                  <Link to="">learn more</Link>
                </div>
              </Col>
              <Col lg={7} sm={7}>
                <div className="aboutHome-img">
                  <div className="aboutRight">
                    <img src={abouthome} />
                  </div>
                  <div className="aboutLeft">
                    <img src={aboutimgicon} />
                    <h5>Professional Jeweler</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="section-padding"></section>

      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="bestseller">
                <h4 className="main-heading">Veejay Jewels Brands </h4>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 justify-content-center">
            {brandcategories.map((item) => (
              <Col lg={4} sm={4} xs={6} className="mb-3" key={item.id}>
                <div className="brandsCard">
                  <img src={item.image} alt="" />
                  <h3>{item.name}</h3>
                  {/* <Link to={`/products/${item.id}/${item.name}`}> */}
                  <Link to="/products">
                    <i className="fa fa-angle-double-right" /> Read More
                  </Link>
                  {/* {item.name === "Aaraha"
                    ? <Link to='/ARHA-brands'><i className="fa fa-angle-double-right" /> Read More</Link>
                    :
                      item.name === "Vedanta" ? <Link to='/VDANA-brands'><i className="fa fa-angle-double-right" /> Read More</Link>
                        : <Link to='/IRKA-brands'><i className="fa fa-angle-double-right" /> Read More</Link>
                    } */}
                </div>
              </Col>
            ))}
            {/* <Col lg={4} sm={6} className='mb-3'>
                <div className="brandsCard">
                  <h3></h3>
                  <Link to='/VDANA-brands'><i className="fa fa-angle-double-right" /> Read More</Link>
                </div>
            </Col>
            <Col lg={4} sm={6} className='mb-3'>
              <div className="brandsCard">
                <h3>Brand IRKA Category</h3>
                <Link to='/IRKA-brands'><i className="fa fa-angle-double-right" /> Read More</Link>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
      <section className="sliderBangle">
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
            {data &&
              data.map((item) => (
                <div key={item.id} className="homeBack-bg">
                  <img src={item.image} alt="" />
                </div>
              ))}
          </Carousel>
        </Container>

        <Container>
          <div className="section-padding bangle-areaCara">
            <div className="bangleHome">
              <h3>Bangle</h3>
              <img src={border} />
            </div>
            <div className="main-space">
              <Row>
                {banglethirddata
                  ? banglethirddata.map(
                      (item, index) =>
                        item.name === "Bangle" && (
                          <Col lg={4} sm={4} xs={6} className="mb-4">
                            <div className="mainProductcard">
                              <Link to={`/product-details/${item.id}`}>
                                <img src={cleanImageUrl(item.image)} />
                                <h4>{item.name}</h4>
                                <p>
                                  {item.unit_value} {item.unit}
                                </p>
                                <span>Karat : {item.purity}</span>
                                <div className="product-btnarea">
                                  <Link
                                    to={`/product-details/${item.id}`}
                                    className="product-addBtn"
                                  >
                                    Add To Cart
                                  </Link>
                                </div>
                              </Link>
                            </div>
                          </Col>
                        )
                    )
                  : null}
                {/* <Col lg={4} sm={4} xs={6} className="mb-4">
                  <div className="mainProductcard">
                    <img src={product4} />
                    <h4>Handmade Jewelry Bangle</h4>
                    <p>10 Gram</p>
                    <div className="product-btnarea">
                      <Link to='/product-details' className="product-addBtn">
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={4} xs={6} className="mb-4">
                  <div className="mainProductcard">
                    <img src={product2} />
                    <h4>Handmade Jewelry Bangle</h4>
                    <p>10 Gram</p>
                    <div className="product-btnarea">
                      <Link to='/product-details' className="product-addBtn">
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </Col> */}
              </Row>
            </div>
          </div>
        </Container>
      </section>

      <section className="new-arr">
        <Container className="p-0">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={newArrivals}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={500}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {secondbanner
              ? secondbanner.map(
                  (item, index) =>
                    item.type === "second" && (
                      <div key={item.id} className="homeBack-bg">
                        <img src={item.image} alt="" />
                      </div>
                    )
                )
              : null}
            {/* <div>
              <img src={one} />
            </div>
            <div>
              <img src={two} />
            </div> */}
          </Carousel>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="bestseller">
                <h6>FREE SHIPPING FR</h6>
                <h4 className="main-heading">The Bestsellers</h4>
              </div>
            </Col>
          </Row>

          {/* <Row className="mt-4 mb-4">
            {latestproduct &&
              latestproduct.map((item) => (
                <Col lg={3} sm={4} xs={6} className="mb-5">
                  <div className="bestseller-card" key={item.id}>
                    <div className="bestseller-cardImg">

                      <img src={cleanImageUrl(item.image)} alt="" />
                    </div>
                  </div>
                  <div className="bestseller-cardText">
                    <h5>{item.name}</h5>
                    <p>{item.unit}</p>
                    <div className="product-btnarea">
                      <Link to={`/product-details/${item.id}`} className="product-addBtn">
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}

          </Row> */}
          <Row className="mt-3 mb-3">
            {latestproduct &&
              latestproduct.map((item) => (
                <Col lg={3} sm={4} xs={6} className="mb-4">
                  <div className="mainProductcard" key={item.id}>
                    <Link to={`/product-details/${item.id}`}>
                      <img src={cleanImageUrl(item.image)} />
                      <h4>{item.name}</h4>
                      <p>
                        {item.unit_value} {item.unit}
                      </p>
                      <span>Karat : {item.purity}</span>
                      <div className="product-btnarea">
                        <Link
                          to={`/product-details/${item.id}`}
                          className="product-addBtn"
                        >
                          Add To Cart
                        </Link>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))}
          </Row>
          <div className="text-center">
            <Link to="/products" className="main-btn">
              <i className="fa fa-angle-double-right" /> See All Jewelery
            </Link>
          </div>
        </Container>
      </section>

      <section className="new-arr">
        <Container fluid className="p-0">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={newArrivals}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {Array.isArray(videos) && videos.length > 0 ? (
              videos
                .filter((video) => video.type === "video")
                .map((video) => (
                  // <Col lg={6}>
                  <div key={video.id} className="videoarea">
                    <video loop autoPlay muted>
                      <source src={video.image} type="video/mp4" />
                    </video>
                    {/* <video src={video.image} controls  /> */}
                  </div>
                  // </Col>
                ))
            ) : (
              <p>No videos found.</p>
            )}
          </Carousel>
        </Container>
      </section>

      <section className="section-padding pb-0">
        <Container>
          <Row>
            <Col lg={6} xs={6}>
              <div className="New-Products-head">
                <h5>New Products</h5>
              </div>
            </Col>
            <Col lg={6} xs={6}>
              <div className="New-ProductsLink">
                <h5>
                  <Link to="/products">
                    Get Similiar Product{" "}
                    <i className="fa fa-long-arrow-right" />
                  </Link>
                </h5>
              </div>
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            {allproduct &&
              allproduct.map((item) => (
                <Col lg={3} sm={4} xs={6} className="mb-4">
                  <div className="mainProductcard" key={item.id}>
                    <Link to={`/product-details/${item.id}`}>
                      <img src={cleanImageUrl(item.image)} />
                      <h4>{item.name}</h4>
                      <p>
                        {item.unit_value} {item.unit}
                      </p>
                      <span>Karat : {item.purity}</span>
                      <div className="product-btnarea">
                        <Link to="/add-to-cart" className="product-addBtn">
                          Add To Cart
                        </Link>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      <section className="section-padding Catlog pt-0">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="bestseller">
                <h4 className="main-heading">Catalogue</h4>
                <h6>Explore our latest designs curated just for you!</h6>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={4} sm={4} xs={12} className="mt-2 mb-3">
              <div className="catlog-card">
                <img src={img3} />
                <Row className="p-3">
                  <Col lg={6} xs={6}>
                    <h5>Women</h5>
                  </Col>
                  <Col lg={6} xs={6}>
                    <h6>
                      <Link to="/women">
                        Explore More <i className="fa fa-angle-right" />
                      </Link>
                    </h6>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4} sm={4} xs={12} className="mt-2 mb-3">
              <div className="catlog-card">
                <img src={img4} />
                <Row className="p-3">
                  <Col lg={6} xs={6}>
                    <h5>Men</h5>
                  </Col>
                  <Col lg={6} xs={6}>
                    <h6>
                      <Link to="/men">
                        Explore More <i className="fa fa-angle-right" />
                      </Link>
                    </h6>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4} sm={4} xs={12} className="mt-2 mb-3">
              <div className="catlog-card">
                <img src={img5} />
                <Row className="p-3">
                  <Col lg={6} xs={6}>
                    <h5>kids</h5>
                  </Col>
                  <Col lg={6} xs={6}>
                    <h6>
                      <Link to="/kids">
                        Explore More <i className="fa fa-angle-right" />
                      </Link>
                    </h6>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding Catlog pt-0">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="bestseller">
                <h4 className="main-heading">Blogs</h4>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            {posts &&
              posts.map((blog) => (
                <Col lg={4} sm={4} xs={12} className="mt-2 mb-3">
                  <div className="blogs-card" key={blog.id}>
                    <img
                      src={
                        blog.image
                          ? `https://veejayjewels.com/storage/app/public/banner/${blog.image}`
                          : blog1
                      }
                      alt=""
                    />
                    <h5>{blog.title}</h5>
                  </div>
                </Col>
              ))}
          </Row>
          <div className="text-center mt-3">
            <Link to="/blog" className="main-btn">
              <i className="fa fa-angle-double-right" /> All Blogs
            </Link>
          </div>
        </Container>
      </section>

      <section className="section-padding">
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
            {/* <Row>
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
            </Row> */}
            {thirdbanner
              ? thirdbanner.map(
                  (item, index) =>
                    item.type === "thrid" && (
                      <div key={item.id} className="homeBack-bg">
                        <img src={item.image} alt="" />
                      </div>
                    )
                )
              : null}
          </Carousel>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row >
            <Col lg={12}>
              <div className="Newsletter">
                <Row className="justify-content-center">
                  <Col sm={6}>
                    <img src={send} />
                    <h1 className="main-head">Get Or Promo Code by Subscribing To our Newsletter</h1>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Enter your email"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Subscribe</Button>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>



        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Home;
