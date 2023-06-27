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
import productdetails1 from "../../assets/images/img/productdetails1.jpg";
import productdetails2 from "../../assets/images/img/productdetails2.jpg";
import productdetails3 from "../../assets/images/img/productdetails3.jpg";
import { BASE_URL } from "../../Constant/Index";
import axios from "axios";

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
function ProductAddCard(props) {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const [unit, setUnit] = useState("");
  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
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

  const GetProductDetails = () => {
    axios
      .get(`${BASE_URL}/products/details/${id}`)
      .then((response) => {
        // console.log(response.data);
        setUnit(response.data.data.unit);
        setName(response.data.data.name);
        setProductType(response.data.data.product_type);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  // console.log("productDetail", productDetail.name);
  useEffect(() => {
    GetProductDetails();
  }, []);
  return (
    <>
      <Header />

      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={5}>
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
                  <img src={productdetails1} />
                </div>
                <div className="productdetails-bg">
                  <img src={productdetails2} />
                </div>
                <div className="productdetails-bg">
                  <img src={productdetails3} />
                </div>
              </Carousel>
            </Col>
            <Col lg={7}>
              <Table responsive className="productDetailTable">
                <tbody>
                  <tr>
                    <th>Product Name</th>
                    <td>{name ? name : ""}</td>
                  </tr>
                  <tr>
                    <th>Product By</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Gram</th>
                    <td>{unit ? unit : ""}</td>
                  </tr>
                </tbody>
              </Table>

              <Table responsive className="productDetailTable">
                {/* <h6>Product Details</h6> */}
                <tbody>
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
              <div className="text-center">
                <button className="showSize" onClick={handleShow}>
                  Show more size
                </button>
              </div>
            </Col>
          </Row>
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
                    <button onClick={handleDecrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement}>+</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductAddCard;
