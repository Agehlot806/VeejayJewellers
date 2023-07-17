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
import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import product1 from "../../assets/images/img/product1.png";
import productdetails2 from "../../assets/images/img/productdetails2.jpg";
import bannertwo from '../../assets/images/banner/image 12.png'
import product2 from "../../assets/images/img/product2.png";
import product3 from "../../assets/images/img/product3.png";
import product4 from "../../assets/images/img/product4.png";
import border from "../../assets/images/banner/border.png";
import { BASE_URL } from "../../Constant/Index";
import axios from "axios";
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
  const [thirdbanner, setthirdbanner] = useState([])
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [show, setShow] = useState(false);
  const [unit, setUnit] = useState("");
  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setdescription] = useState("")
  const [variations, setvariations] = useState("")
  // const [variationstype, setvariationstype] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const addtocard = useNavigate()
  const [selectedVariant, setSelectedVariant] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [variationstype, setVariationstype] = useState("");
  const handleIncrementone = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrementone = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleSubmitone = () => {
    const formData = new FormData();
    formData.append("user_id", loginId);
    formData.append("product_id", id);
    formData.append("product_name", name);
    formData.append(
      "variant",
      JSON.stringify([{ variant: selectedVariant, quantity: quantity }])
    );
    formData.append(
      "image",
      "https://veejayjewels.com/storage/app/public/product/" + image
    );
    axios
      .post(`${BASE_URL}/products/add_to_card`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        addtocard("/add-to-cart");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const handleIncrement = (variant) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [variant]: (prevQuantities[variant] || 0) + 1,
    }));
  };
  const handleDecrement = (variant) => {
    setSelectedQuantities((prevQuantities) => {
      const updatedQuantity = (prevQuantities[variant] || 0) - 1;
      return {
        ...prevQuantities,
        [variant]: updatedQuantity >= 1 ? updatedQuantity : 1,
      };
    });
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
        setvariations(response.data.data.variations)
        setVariationstype(response.data.data.variations[0].type);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log("variationstype", variationstype);
  useEffect(() => {
    GetProductDetails();
    thirdBanner();
  }, []);
  const loginId = localStorage.getItem("id");
  console.log("loginId", loginId);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const handleVariantSelection = (variant) => {
    const isSelected = selectedVariants.includes(variant);
    if (isSelected) {
      setSelectedVariants(selectedVariants.filter((v) => v !== variant));
    } else {
      setSelectedVariants([...selectedVariants, variant]);
    }
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("user_id", loginId);
    formData.append("product_id", id);
    formData.append("product_name", name);
    formData.append(
      "variant",
      JSON.stringify(
        Object.entries(selectedQuantities).map(([variant, quantity]) => ({
          variant,
          quantity,
        }))
      )
    );
    formData.append(
      "image",
      "https://veejayjewels.com/storage/app/public/product/" + image
    );
    axios
      .post(`${BASE_URL}/products/add_to_card`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        addtocard("/add-to-cart");
        // history.push("/all-events");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [typevariant, setTypeVeriant] = useState()
  const typeValue = (e) => {
    setTypeVeriant(e.target.value)
  }
  console.log("typevarianttypevariant", typevariant);



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

  return (
    <>
      <Header />
      <div className='allPage-bgtwo'>
        <Container fluid className='p-0'>
          <img src={bannertwo} />
        </Container>
      </div>
      <section className="section-padding">
        <Container>
          <div className="productDetailsBG">
            <Row>
              <Col lg={4} sm={4}>
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
              <Col lg={4} sm={4}>
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
                <Button className="showSize" onClick={handleSubmitone}>
                  Add To Cart
                </Button>
              </Col>
              <Col lg={4} sm={4}>

                <div className="show-area">
                  <div className="show-areatext">
                    <Row>
                      <Col lg={4} xs={4}><h6>Size</h6></Col>
                      <Col lg={8} xs={8}><div className="text-right"><h6>Pcs Quantity</h6></div></Col>
                    </Row>
                  </div>
                  <div className="show-contentS">
                    <Row>
                      <Col lg={4} sm={4}>
                        <label className="radio-inline">
                          <input
                            type="checkbox"
                            name="optradio"
                            onChange={() => setSelectedVariant(variationstype)}
                          />{" "}
                          {variationstype}
                        </label>
                      </Col>
                      <Col lg={8} sm={8}><div className="text-right">
                        <div className="quantity-btn">
                          <button onClick={handleDecrementone}>-</button>
                          <span>{quantity}</span>
                          <button onClick={handleIncrementone}>+</button>
                        </div>
                      </div>
                      </Col>
                    </Row>
                    <hr />
                  </div>

                  <div className="showSizearea">
                    <Link className="showSize" onClick={handleShow}>
                      Show more size
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="section-padding">
        <Container className="productCardbg">
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
            <Col lg={3} sm={4} xs={6} className="mb-4">
              <div className="mainProductcard">
                <img src={product2} />
                <h4>Bangle "MURATO"</h4>
                <p>10gms</p>
                <div className="product-btnarea">
                  <Link to="/product-details" className="product-addBtn">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={4} xs={6} className="mb-4">
              <div className="mainProductcard">
                <img src={product2} />
                <h4>Bangle "MURATO"</h4>
                <p>10gms</p>
                <div className="product-btnarea">
                  <Link to="/product-details" className="product-addBtn">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={4} xs={6} className="mb-4">
              <div className="mainProductcard">
                <img src={product3} />
                <h4>Bangle "MURATO"</h4>
                <p>10gms</p>
                <div className="product-btnarea">
                  <Link to="/product-details" className="product-addBtn">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={4} xs={6} className="mb-4">
              <div className="mainProductcard">
                <img src={product4} />
                <h4>Bangle "MURATO"</h4>
                <p>10gms</p>
                <div className="product-btnarea">
                  <Link to="/product-details" className="product-addBtn">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={4} xs={6} className="mb-4">
              <div className="mainProductcard">
                <img src={product6} />
                <h4>Bangle "MURATO"</h4>
                <p>10gms</p>
                <div className="product-btnarea">
                  <Link to="/product-details" className="product-addBtn">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={4} xs={6} className="mb-4">
              <div className="mainProductcard">
                <img src={product2} />
                <h4>Bangle "MURATO"</h4>
                <p>10gms</p>
                <div className="product-btnarea">
                  <Link to="/product-details" className="product-addBtn">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={4} xs={6} className="mb-4">
              <div className="mainProductcard">
                <img src={product2} />
                <h4>Bangle "MURATO"</h4>
                <p>10gms</p>
                <div className="product-btnarea">
                  <Link to="/product-details" className="product-addBtn">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={4} xs={6} className="mb-4">
              <div className="mainProductcard">
                <img src={product2} />
                <h4>Bangle "MURATO"</h4>
                <p>10gms</p>
                <div className="product-btnarea">
                  <Link to="/product-details" className="product-addBtn">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={4} xs={6} className="mb-4">
              <div className="mainProductcard">
                <img src={product2} />
                <h4>Bangle "MURATO"</h4>
                <p>10gms</p>
                <div className="product-btnarea">
                  <Link to="/product-details" className="product-addBtn">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </Col>

          </Row>
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
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
        {/* <Modal.Body>
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
                  {variations ? (
                    variations.map((item, index) => (
                      <label className="radio-inline" key={index}>
                        <input type="checkbox" name="optradio" /> {item.type}
                      </label>
                    ))
                  ) : null}
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
        </Modal.Body> */}
        <Modal.Body>
          {variations ? (
            <Table className="productDetailTable">
              <thead>
              <tr>
                <th>Size</th>
                <th>Pcs Quantity</th>
              </tr>
            </thead>
              <tbody>
                {variations.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <label className="radio-inline">
                        <input
                          type="checkbox"
                          name="optradio"
                          onChange={() => handleVariantSelection(item.type)}
                        />{" "}
                        {item.type}
                      </label>
                    </td>
                    <td>
                      <div className="quantity-btn">
                        <button onClick={() => handleDecrement(item.type)}>-</button>
                        <span>{selectedQuantities[item.type] || 1}</span>
                        <button onClick={() => handleIncrement(item.type)}>+</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : null}
          {/* <button onClick={handleSubmit}>Add to Cart</button> */}
        </Modal.Body>


        <Modal.Footer>
          {/* <Button variant="primary" onClick={handleClose} > */}
          <Button onClick={handleSubmit} className="showSize">
            Add To Cart
          </Button>
          {/* </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProductDetails;
