import React, { useEffect, useState } from "react";
import Header from "../../directives/header";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
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
import toast, { Toaster } from "react-hot-toast";

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
    items: 2,
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
  const [banglethirddata, setbanglethirdData] = useState([]);

  const userStatus = localStorage.getItem("status");
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState();
  const loginId = localStorage.getItem("id");
  const userName = localStorage.getItem("name");
  const phone = localStorage.getItem("phone");
  const [wishlistData, setWishlistData] = useState([]);
  const [isFavCheck, setisFavCheck] = useState(false);

  // const profile = localStorage.getItem("profileImage");
  const handleDismiss = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (userStatus == "verified") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [userStatus]);
  useEffect(() => {
    handleWishlist();

    return () => {
      setisFavCheck(false);
    };
  }, [isFavCheck]);

  useEffect(() => {
    // Fetch the data
    fetch(`${BASE_URL}/banners1`)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data))
      .catch((error) => console.error("An error occurred:", error));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const banglethirds = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        setbanglethirdData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const fetchlatestProduct = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/latest`);
      const data = await response.json();
      const latestPosts = data.data.slice(0, 8);
      setlatestproduct(latestPosts);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchnewProduct = async () => {
    try {
      const response = await fetch(`${BASE_URL}/products/latest`);
      const data = await response.json();
      const latestPosts = data.data;
      setallproduct(latestPosts);
      fetchWishlistData();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWishlistData = async () => {
    try {
      const response = await axios.get(
        `https://veejayjewels.com/api/v1/customer/wish-list/wishlist/${loginId}`
      );
      setWishlistData(response.data.wishlist);
      setisFavCheck(true);
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
    }
  };
  const handleWishlist = () => {
    let newArr = [...allproduct];
    let filterData = [];
    if (allproduct?.length > 0) {
      filterData = allproduct.filter((el) => {
        return wishlistData.some((ele) => {
          return ele.product_id === el.id;
        });
      });
    }

    if (filterData.length > 0) {
      for (let index = 0; index < filterData.length; index++) {
        const element = filterData[index];
        const indexData = allproduct.map((ele) => ele.id).indexOf(element.id);
        console.log("indexData in all", indexData);
        newArr[indexData].isFav = true;
        setallproduct(newArr);
      }
    }
    console.log("filterData", filterData);
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

  const addToWishlist = async (product_id, type) => {
    const formData = new FormData();
    formData.append("id", loginId);
    formData.append("product_id", product_id);
    axios
      .post(
        "https://veejayjewels.com/api/v1/customer/wish-list/add-to-wishlist",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((response) => {
        console.log("Response:", response);
        if (response.data.message) {
          toast.success(response.data.message);

          let newArr = [...allproduct];
          let newArr1 = [...banglethirddata];
          let newArr2 = [...latestproduct];
          const index = allproduct.map((el) => el.id).indexOf(product_id);
          newArr[index].isFav = true;
          setallproduct(newArr);
        }
      })
      .catch((error) => {
        toast.error("Already in your wishlist");
      });
  };
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
    };
    axios
      .post("https://veejayjewels.com/api/v1/auth/newsletter", data)
      .then((response) => {
        setResponseMessage(response.data.message);
        toast.success("Add Successfull");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  const handleVerify = async () => {
    let formData = new FormData();
    formData.append("user_id", loginId);
    formData.append("user_name", userName);
    await axios
      .post("https://veejayjewels.com/api/v1/auth/verified_request", formData)
      .then((res) => {
        console.log("res in verify", res);
        toast.success("Verification request sent Succsesfully");
        setShow(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <Toaster />
      <Header setShow={setShow} />
      {/* <div className="text-center mt-3">
        <Button className="showSize1" onClick={handleShow}>
          Popup
        </Button>
      </div> */}
      <div className="home-bg">
        <div className="home-area">
          <Container>
            {/* <Row className="justify-content-center">
              <Col lg={4}>
                  <div className="verified-area" role="alert">
                    <button type="button" className="close" onClick={handleDismiss}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h5>Verification Request</h5>
                    <h6>You are not verified</h6>
                    <div className="ok-btn">
                      <button onClick={handleDismiss}>OK</button>
                    </div>
                  </div>
              </Col>
            </Row> */}
            <Row>
              <Col lg={7} sm={7}>
                <div className="home-content">
                  <div className="mainForm-text homeee">
                    <h2>Veejay Jewels</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet integer lorem amet arcu egestas congue. Rhoncus
                    scelerisque mi, ac sed lacus aliquam at tortor. Risus nulla
                    massa ut vitae phasellus dictum.
                  </p>
                  {phone ? null : (
                    <Link to="/login" className="btn-theme-4">
                      Login
                    </Link>
                  )}
                  {userStatus == "unverified" ? (
                    <Link onClick={() => setShow(true)} className="btn-theme-5">
                      <i className="fa fa-qrcode" /> Custom design
                    </Link>
                  ) : (
                    <Link
                      to={phone ? `/custom-design` : "/login"}
                      className="btn-theme-5"
                    >
                      <i className="fa fa-qrcode" /> Custom design
                    </Link>
                  )}
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
          <Row className="justify-content-center">
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

      <section className="section-padding bestseller">
        <div className="bangleHome">
          <h4 className="main-heading">Veejay Jewels Brand</h4>
        </div>
        <Container>
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
            {brandcategories.map((item) => (
              <div key={item.id}>
                {userStatus == "unverified" ? (
                  <Link onClick={() => setShow(true)}>
                    <div className="brandsCard">
                      <img src={item.image} alt="" />
                      <h3>{item.name}</h3>
                    </div>
                  </Link>
                ) : (
                  <Link to={phone ? `/products/${"AllProduct"}` : "/login"}>
                    <div className="brandsCard">
                      <img src={item.image} alt="" />
                      <h3>{item.name}</h3>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </Carousel>
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
                              <div className="like-icon">
                                {userStatus == "unverified" ? (
                                  <Link onClick={() => setShow(true)}>
                                    <i
                                      className={
                                        item.isFav
                                          ? "fa fa-heart"
                                          : "fa fa-heart-o"
                                      }
                                    />
                                  </Link>
                                ) : (
                                  <Link>
                                    <i
                                      className={
                                        item.isFav
                                          ? "fa fa-heart"
                                          : "fa fa-heart-o"
                                      }
                                      onClick={() =>
                                        addToWishlist(item.id, "Bangle")
                                      }
                                    />
                                  </Link>
                                )}
                              </div>
                              <img src={"https://veejayjewels.com/storage/app/public/product/" + item.single_img} />
                              <h4>{item.name}</h4>
                              <p>
                                {item.unit_value} {item.unit}
                              </p>
                              <span>Karat : {item.purity}</span>
                              <br />
                              <span>Design Num : {item.design}</span>
                              <div className="product-btnarea">
                                {userStatus == "unverified" ? (
                                  <Link
                                    onClick={() => setShow(true)}
                                    className="product-addBtn"
                                  >
                                    View Products
                                  </Link>
                                ) : (
                                  <Link
                                    to={
                                      phone
                                        ? `product-details/${item.id}`
                                        : "/login"
                                    }
                                    className="product-addBtn"
                                  >
                                    View Products
                                  </Link>
                                )}
                              </div>
                            </div>
                          </Col>
                        )
                    )
                  : null}
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

          <Row className="mt-3 mb-3">
            {allproduct &&
              allproduct.slice(0, 8).map((item) => (
                <Col lg={3} sm={4} xs={6} className="mb-4">
                  <div className="mainProductcard" key={item.id}>
                    {/* <div className="like-icon">
                      <i
                        className={item.isFav ? "fa fa-heart" : "fa fa-heart-o"}
                        onClick={() => {
                          if (loginId == null) {
                            toast.error("Please Login first");
                          } else {
                            addToWishlist(item.id, "latest");
                          }
                        }}
                      />
                    </div> */}
                    <div className="like-icon">
                      {userStatus == "unverified" ? (
                        <Link onClick={() => setShow(true)}>
                          <i
                            className={
                              item.isFav ? "fa fa-heart" : "fa fa-heart-o"
                            }
                          />
                        </Link>
                      ) : (
                        <Link>
                          <i
                            className={
                              item.isFav ? "fa fa-heart" : "fa fa-heart-o"
                            }
                            onClick={() => addToWishlist(item.id, "Bangle")}
                          />
                        </Link>
                      )}
                    </div>
                    <img src={"https://veejayjewels.com/storage/app/public/product/" + item.single_img}  />
                    <h4>{item.name}</h4>
                    <p>
                      {item.unit_value} {item.unit}
                    </p>
                    <span>Karat : {item.purity}</span>
                    <br />
                    <span>Design Num : {item.design}</span>
                    <div className="product-btnarea">
                      {userStatus == "unverified" ? (
                        <Link
                          onClick={() => setShow(true)}
                          className="product-addBtn"
                        >
                          View Products
                        </Link>
                      ) : (
                        <Link
                          to={phone ? `product-details/${item.id}` : "/login"}
                          className="product-addBtn"
                        >
                          View Products
                        </Link>
                      )}
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
          <div className="text-center">
            {userStatus == "unverified" ? (
              <Link onClick={() => setShow(true)} className="main-btn">
                <i className="fa fa-angle-double-right" /> See All Jewelery
              </Link>
            ) : (
              <Link
                to={phone ? `/products/${"AllProduct"}` : "/login"}
                className="main-btn"
              >
                <i className="fa fa-angle-double-right" /> See All Jewelery
              </Link>
            )}
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
                  {userStatus == "unverified" ? (
                    <Link onClick={() => setShow(true)}>
                      Get Similiar Product{" "}
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  ) : (
                    <Link to={phone ? `/products/${"AllProduct"}` : "/login"}>
                      Get Similiar Product{" "}
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  )}
                </h5>
              </div>
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            {allproduct &&
              allproduct.slice(0, 4).map((item) => (
                <Col lg={3} sm={4} xs={6} className="mb-4">
                  <div className="mainProductcard" key={item.id}>
                    {/* <div className="like-icon">
                      <i
                        className={item.isFav ? "fa fa-heart" : "fa fa-heart-o"}
                        onClick={() => {
                          if (loginId == null) {
                            toast.error("Please Login first");
                          } else {
                            addToWishlist(item.id, "allproduct");
                          }
                        }}
                      />
                    </div> */}
                    <div className="like-icon">
                      {userStatus == "unverified" ? (
                        <Link onClick={() => setShow(true)}>
                          <i
                            className={
                              item.isFav ? "fa fa-heart" : "fa fa-heart-o"
                            }
                          />
                        </Link>
                      ) : (
                        <Link>
                          <i
                            className={
                              item.isFav ? "fa fa-heart" : "fa fa-heart-o"
                            }
                            onClick={() => addToWishlist(item.id, "Bangle")}
                          />
                        </Link>
                      )}
                    </div>
                    <img src={"https://veejayjewels.com/storage/app/public/product/" + item.single_img}/>
                    <h4>{item.name}</h4>
                    <p>
                      {item.unit_value} {item.unit}
                    </p>
                    <span>Karat : {item.purity}</span>
                    <br />
                    <span>Design Num : {item.design}</span>
                    <div className="product-btnarea">
                      {userStatus == "unverified" ? (
                        <Link
                          onClick={() => setShow(true)}
                          className="product-addBtn"
                        >
                          View Products
                        </Link>
                      ) : (
                        <Link
                          to={phone ? `product-details/${item.id}` : "/login"}
                          className="product-addBtn"
                        >
                          View Products
                        </Link>
                      )}
                    </div>
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
                      {userStatus == "unverified" ? (
                       <Link onClick={() => setShow(true)}>
                          Explore More <i className="fa fa-angle-right" />
                        </Link>
                      ) : (
                        <Link to={phone ? "/women" : "/login"}>
                          Explore More <i className="fa fa-angle-right" />
                        </Link>
                      )}
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
                    {userStatus == "unverified" ? (
                       <Link onClick={() => setShow(true)}>
                         Explore More <i className="fa fa-angle-right" />
                      </Link>
                    ):(
                      <Link to={phone ? "/men" : "/login"}>
                        Explore More <i className="fa fa-angle-right" />
                      </Link>
                    )}
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
                    {userStatus == "unverified" ? (
                       <Link onClick={() => setShow(true)}>
                         Explore More <i className="fa fa-angle-right" />
                      </Link>
                    ):(
                      <Link to={phone ? "/kids" : "/login"}>
                        Explore More <i className="fa fa-angle-right" />
                      </Link>
                    )}
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
          <Row className="mt-4 justify-content-center">
            {posts &&
              posts.map((blog) => (
                <Col lg={4} sm={4} xs={6} className="mt-2 mb-3">
                  {userStatus == "unverified" ? ( 
                 <Link onClick={() => setShow(true)}>
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
                  </Link>
                  ):(
                  <Link to={phone ? `/blog` : "/login"}>
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
                  </Link>
                  )}
                </Col>
              ))}
          </Row>
          <div className="text-center mt-3">
          {userStatus == "unverified" ? ( 
            <Link onClick={() => setShow(true)} className="main-btn">
              <i className="fa fa-angle-double-right" /> All Blogs
            </Link>
            ):(
              <Link to={phone ? `/blog` : "/login"} className="main-btn">
              <i className="fa fa-angle-double-right" /> All Blogs
            </Link>
            )}
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
          <Row>
            <Col lg={12}>
              <div className="Newsletter">
                <Row className="justify-content-center">
                  <Col sm={6}>
                    <div className="newletterarea">
                      <img src={send} />
                      <h1 className="main-head">
                        Signup To be a veejay jewels insider
                      </h1>
                      <Form className="subscribt-area">
                        <Form.Control
                          type="search"
                          placeholder="Enter your email"
                          className="me-2"
                          aria-label="Search"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                          variant="outline-success"
                          onClick={handleSubmit}
                        >
                          Subscribe
                        </Button>
                        {/* {responseMessage && <p>{responseMessage}</p>} */}
                      </Form>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer setShow={setShow}/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="order-confi"
      >
        <Modal.Body>
          <div className="show-area">
            <div className="show-areatext">
              <div className="verify-area-new">
                <Row>
                  <Col lg={6}>
                    <h3>Session Expired</h3>
                  </Col>
                  <Col lg={6}>
                    <a onClick={() => setShow(false)}>
                      <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="verify-popup">
              <h4>Please Verify Again</h4>
              <Button variant="btn" onClick={() => handleVerify()}>
              Verification Request
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
