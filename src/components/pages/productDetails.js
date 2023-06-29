import React, { useEffect, useState } from "react";
import Header from "../../directives/header";
import {
  Col,
  Container,
  Row,
  Form,
  Table,
  Modal,
  Button,
} from "react-bootstrap";
import product6 from "../../assets/images/img/product6.png";
import Footer from "../../directives/footer";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import product1 from "../../assets/images/img/product1.png";
import productdetails2 from "../../assets/images/img/productdetails2.jpg";
import productdetails3 from "../../assets/images/img/productdetails3.jpg";
import product2 from "../../assets/images/img/product2.png";
import product3 from "../../assets/images/img/product3.png";
import product4 from "../../assets/images/img/product4.png";
import border from "../../assets/images/banner/border.png";
import { BASE_URL } from "../../Constant/Index";
import axios from "axios";
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
const productdetails = {
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
function ProductDetails(props) {
  const [quantity, setQuantity] = useState(1);
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [show, setShow] = useState(false);
  const [unit, setUnit] = useState("");
  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const[description,setdescription]=useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement1 = () => {
    setQuantity1(quantity1+ 1);
  };
  const handleDecrement1 = () => {
    if (quantity1 > 1) {
      setQuantity1(quantity1 - 1);
    }
  };
  const handleIncrement2 = () => {
    setQuantity2(quantity2 + 1);
  };
  const handleDecrement2 = () => {
    if (quantity2 > 1) {
      setQuantity2(quantity2 - 1);
    }
  };
  const GetProductDetails = () => {
    axios
      .get(`${BASE_URL}/products/details/${id}`)
      .then((response) => {
        console.log(response.data);
        setUnit(response.data.data.unit);
        setName(response.data.data.name);
        setImage(response.data.data.image);
        setProductType(response.data.data.product_type);
        setdescription(response.data.data.description);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log("image", image);
  useEffect(() => {
    GetProductDetails();
  }, []);


  return (
    <>
      <Header />
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={4}>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={productdetails}
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
                dotListClass="product-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div className="productdetails-bg">
                  <img src={"https://veejayjewels.com/storage/app/public/product/" + image} />
                </div>
                <div className="productdetails-bg">
                  <img src={"https://veejayjewels.com/storage/app/public/product/" + image} />
                </div>
                <div className="productdetails-bg">
                  <img src={"https://veejayjewels.com/storage/app/public/product/" + image} />
                </div>
              </Carousel>
            </Col>
            <Col lg={4}>
              <Table responsive className="productDetailTable">
                <tbody>
                  <tr>
                    <th>Product Name</th>
                    <td>{name ? name : ""}</td>
                  </tr>
                  <tr>
                    <th>Gram</th>
                    <td>{unit ? unit : ""}</td>
                  </tr>
                  <tr>
                    <th>Design Number</th>
                    <td>EX1035</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>67.00</td>
                  </tr>
                  <tr>
                    <th>Jewelry Type</th>
                    <td>{productType ? productType : ""}</td>
                  </tr>
                </tbody>
              </Table>
              <Link to='/add-to-cart' className="showSize">
                Add To Cart
              </Link>
            </Col>
            <Col lg={3}>
              <Table responsive className="productDetailTable">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Pcs Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <label className="radio-inline">
                        <input type="radio" name="optradio" /> 1.5
                      </label>
                    </td>
                    <td>
                      <div className="quantity-btn">
                        <button onClick={handleDecrement}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrement}>+</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Link className="showSize" onClick={handleShow}>
                    Show more size
                  </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-padding">
        <Container>
      <div className='product_details'>
                  <h1 className="p-3">Product Description</h1>
      </div>
      <div className="product-text p-3">
        <h3><div dangerouslySetInnerHTML={{ __html: description }}></div></h3>
      </div>
      </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
            <div className="aboutHome">
            <h3>Related Products</h3>
            <img src={border} />
          </div>
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            <Col lg={4} sm={4} xs={6} className="mb-3">
              <Link to="/product-add-card">
                <div className="bestseller-card">
                  <div className="bestseller-cardImg">
                    {/* <Link to="/product-lock"><i className="fa fa-lock" /></Link> */}
                    <img src={product6} />
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
                    <Link to="/product-details" className="product-addBtn">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={4} sm={4} xs={6} className="mb-3">
              <Link to="/product-add-card">
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
                    <Link to="/product-details" className="product-addBtn">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={4} sm={4} xs={6} className="mb-3">
              <Link to="/product-add-card">
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
                    <Link to="/product-details" className="product-addBtn">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={4} sm={4} xs={6} className="mb-3">
              <Link to="/product-add-card">
                <div className="bestseller-card">
                  <div className="bestseller-cardImg">
                    <img src={product3} />
                  </div>
                </div>
                <div className="bestseller-cardText">
                  <h5>bangle "MURATO"</h5>
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
              </Link>
            </Col>
            <Col lg={4} sm={4} xs={6} className="mb-3">
              <Link to="/product-add-card">
                <div className="bestseller-card">
                  <div className="bestseller-cardImg">
                    <img src={product4} />
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
                    <Link to="/product-details" className="product-addBtn">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={4} sm={4} xs={6} className="mb-3">
              <Link to="/product-add-card">
                <div className="bestseller-card">
                  <div className="bestseller-cardImg">
                    <img src={product2} />
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
                    <Link to="/product-details" className="product-addBtn">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={4} sm={4} xs={6} className="mb-3">
              <Link to="/product-add-card">
                <div className="bestseller-card">
                  <div className="bestseller-cardImg">
                    <img src={product2} />
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
                    <Link to="/product-details" className="product-addBtn">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={4} sm={4} xs={6} className="mb-3">
              <Link to="/product-add-card">
                <div className="bestseller-card">
                  <div className="bestseller-cardImg">
                    <img src={product2} />
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
                    <Link to="/product-details" className="product-addBtn">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
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
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
        <Modal.Body>
          <Table responsive className="productDetailTable">
            <thead>
              <tr>
                <th>Size</th>
                <th>Pcs Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" /> 1.5
                  </label>
                </td>
                <td>
                  <div className="quantity-btn">
                    <button onClick={handleDecrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" /> 1.5
                  </label>
                </td>
                <td>
                  <div className="quantity-btn">
                    <button onClick={handleDecrement1}>-</button>
                    <span>{quantity1}</span>
                    <button onClick={handleIncrement1}>+</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="radio-inline">
                    <input type="radio" name="optradio" /> 1.5
                  </label>
                </td>
                <td>
                  <div className="quantity-btn">
                    <button onClick={handleDecrement2}>-</button>
                    <span>{quantity2}</span>
                    <button onClick={handleIncrement2}>+</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" onClick={handleClose} > */}
          <Link to='/add-to-cart' className="showSize">
            Add To Cart
          </Link>
          {/* </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProductDetails;
