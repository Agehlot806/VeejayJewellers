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
import bannertwo from "../../assets/images/banner/image 12.png";
import product2 from "../../assets/images/img/product2.png";
import product3 from "../../assets/images/img/product3.png";
import product4 from "../../assets/images/img/product4.png";
import border from "../../assets/images/banner/border.png";
import { BASE_URL } from "../../Constant/Index";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the CSS for the lightbox styles

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
  const [thirdbanner, setthirdbanner] = useState([]);
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [show, setShow] = useState(false);
  const [unit, setUnit] = useState("");
  const [unit_value, setunit_value] = useState("");
  const [design, setdesign] = useState("");
  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setdescription] = useState("");
  const [variations, setvariations] = useState("");
  // const [variationstype, setvariationstype] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoies, setCategoies] = useState("");
  const [allproduct, setallproduct] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const { id } = useParams();
  const addtocard = useNavigate();
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
        // addtocard("/add-to-cart");
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
    const updatedQuantity = (selectedQuantities[variant] || 0) - 1;
    if (updatedQuantity === 0 || updatedQuantity === -1) {
      const data = Object.entries(selectedQuantities).filter(el => el[0] !== variant)
      const converArray = {}
      for (const innerArray of data) {
        const key = innerArray[0]
        const value = innerArray[1]
        converArray[key] = value
      }
      setSelectedQuantities(converArray)
    } else {
      setSelectedQuantities((prevQuantities) => {
        const updatedQuantity = (prevQuantities[variant] || 0) - 1;
        return {
          ...prevQuantities,
          [variant]: updatedQuantity >= 1 ? updatedQuantity : 0,
        };
      });
    }
  };
  const GetProductDetails = () => {
    axios
      .get(`${BASE_URL}/products/details/${id}`)
      .then((response) => {
        console.log(response.data);
        setUnit(response.data.data.unit);
        setunit_value(response.data.data.unit_value);
        setdesign(response.data.data.design);
        setName(response.data.data.name);
        setImage(response.data.data.image);
        setProductType(response.data.data.product_type);
        setdescription(response.data.data.description);
        setvariations(response.data.data.variations);
        setVariationstype(response.data.data.variations[0].type);
        setCategoies(response.data.data.category);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    handleAllProduct();
    handleFilterData(categoies);
  }, [categoies]);

  const handleAllProduct = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        console.log(response.data);
        setallproduct(response.data.data);
        handleFilterData();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleFilterData = (data) => {
    console.log("categoies", data);
    const handlefilter = allproduct.filter(
      (item) => item.category === categoies
    );
    console.log(handlefilter);
    setFilterData(handlefilter);
  };
  console.log("allproduct", filterData);

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
      const data = Object.entries(selectedQuantities).filter(el => el[0] !== variant)
      const converArray = {}
      for (const innerArray of data) {
        const key = innerArray[0]
        const value = innerArray[1]
        converArray[key] = value
      }
      setSelectedQuantities(converArray)
      // setSelectedQuantities((prevQuantities) => ({
      //   ...prevQuantities,
      //   [variant]: 0,
      // }));
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
    // for (let pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }
    axios
      .post(`${BASE_URL}/products/add_to_card`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response);
        handleClose();
        // addtocard("/add-to-cart");
        // history.push("/all-events");
        toast.success("Add to Cart Successfuly");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [typevariant, setTypeVeriant] = useState();
  const typeValue = (e) => {
    setTypeVeriant(e.target.value);
  };
  console.log("typevarianttypevariant", typevariant);

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
  const cleanImageUrl = (imageUrl) => {
    // Remove square brackets and escape characters
    return imageUrl.replace(/[\[\]\\"]/g, "");
  };

  // Lightbox product =====

  const [mainImage, setMainImage] = useState("");
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

  useEffect(() => {
    if (image && image.length > 0) {
      setMainImage(
        "https://veejayjewels.com/storage/app/public/product/" +
        image[0]
      );
    }
  }, [image]);

  const handleThumbnailClick = (index) => {
    setMainImage(
      "https://veejayjewels.com/storage/app/public/product/" + image[index]
    );
  };

  const handleMainImageClick = () => {
    setLightboxIsOpen(true);
    setLightboxImageIndex(image.indexOf(mainImage));
  };


  return (
    <>
      <Toaster />
      <Header />
      <div className="allPage-bgtwo">
        <Container fluid className="p-0">
          <img src={bannertwo} />
        </Container>
      </div>
      <section className="section-padding">
        <Container>
          <div className="productDetailsBG">
            <Row>
              <Col lg={6}>
                <div>
                  <div className="productdetails-bg">
                    <img
                      src={mainImage}
                      alt="Product Image"
                      onClick={handleMainImageClick}
                    />
                  </div>
                  <div className="needplace">
                    <Row>
                      {image && image.length > 0 ? (
                        image.map((item, index) => (
                          <Col sm={3} xs={4} className="mb-3" key={index}>
                            <div
                              className="semi-produ-img"
                              onClick={() => handleThumbnailClick(index)}
                            >
                              <img
                                src={
                                  "https://veejayjewels.com/storage/app/public/product/" +
                                  item
                                }
                                alt={`Image ${index}`}
                              />
                            </div>
                          </Col>
                        ))
                      ) : (
                        <p className="emptyMSG">No Related Image.</p>
                      )}
                    </Row>
                  </div>
                </div>

                {lightboxIsOpen && (
                  <Lightbox
                    mainSrc={
                      "https://veejayjewels.com/storage/app/public/product/" +
                      image[lightboxImageIndex]
                    }
                    nextSrc={
                      "https://veejayjewels.com/storage/app/public/product/" +
                      image[(lightboxImageIndex + 1) % image.length]
                    }
                    prevSrc={
                      "https://veejayjewels.com/storage/app/public/product/" +
                      image[
                      (lightboxImageIndex + image.length - 1) % image.length
                      ]
                    }
                    onCloseRequest={() => setLightboxIsOpen(false)}
                    onMovePrevRequest={() =>
                      setLightboxImageIndex(
                        (lightboxImageIndex + image.length - 1) % image.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setLightboxImageIndex((lightboxImageIndex + 1) % image.length)
                    }
                  />
                )}
              </Col>


              <Col lg={6}>
                <Table className="productDetailTable">
                  <tbody>
                    <tr>
                      <th>Product Name :</th>
                      <td>{name ? name : ""}</td>
                    </tr>
                    <tr>
                      <th>Gram :</th>
                      <td>{unit_value ? unit_value : ""} {unit ? unit : ""}</td>
                    </tr>
                    <tr>
                      <th>Design Number :</th>
                      <td>{design ? design : ""}</td>
                    </tr>
                    <tr>
                      <th>Weight :</th>
                      <td>67.00</td>
                    </tr>
                    <tr>
                      <th>Jewelry Type :</th>
                      <td>{productType ? productType : ""}</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>
                        {variations ? (
                          <Row >
                            {variations.map((item, index) => (
                              <Col lg={1} className="radio-inline" key={index}>
                                {item.type},
                              </Col>
                            ))}
                          </Row>
                        ) : null}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Button className="showSize" onClick={handleShow}>
                  {/* onClick={handleSubmitone} */}
                  See More Size
                </Button>



                {/* <div className="show-area">
                  <div className="show-areatext">
                    <Row>
                      <Col lg={4} xs={4}>
                        <h6>Size</h6>
                      </Col>
                      <Col lg={8} xs={8}>
                        <div className="text-right">
                          <h6>Pcs Quantity</h6>
                        </div>
                      </Col>
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
                      <Col lg={8} sm={8}>
                        <div className="text-right">
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
                    <div><Link className="showSize" onClick={handleShow}>
                      Add to Cart
                    </Link></div>
                    <div className="like-icon">
                      <i class="fa fa-heart-o" />
                    </div>
                  </div>
                </div> */}
              </Col>
            </Row>
          </div >
        </Container >
      </section >
      <section className="section-padding">
        <Container className="productCardbg">
          <div className="product_details">
            <h1 className="p-3">Product Description</h1>
          </div>
          <div className="product-text p-3">
            <h3>
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </h3>
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
            {filterData ? (
              filterData.map((item) => (
                <Col lg={3} sm={4} xs={6} className="mb-4">
                  <div className="mainProductcard">
                    <Link to={`/product-details/${item.id}`}>
                      <div className="like-icon">
                        <i class="fa fa-heart-o" />
                      </div>
                      <img src={cleanImageUrl(item.image)} alt="" />
                      <h4>{item.name}</h4>
                      <p>
                        {item.unit_value} {item.unit}
                        Pcs Quantity{" "}
                      </p>
                      <span>Karat : {item.purity}</span>
                      <div className="product-btnarea">
                        <Link
                          to={`/product-details/${item.id}`}
                          className="product-addBtn"
                        >
                          View Product
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
      <Footer />
      <Modal show={show} onHide={handleClose} className="order-confi1">
        <Modal.Body>
          <div className="show-area">
            <div className="show-areatext">
              <Row>
                <Col lg={4} xs={4}><h6>Size</h6></Col>
                <Col lg={8} xs={8}><div className="text-right"><h6>Pcs Quantity</h6></div></Col>
              </Row>
            </div>
            <div className="show-contentS">
              <Row>
                {variations ? (
                  <Table className="productDetailTable">
                    <tbody>
                      {variations.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <label className="radio-inline">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="optradio"
                                  onChange={() => handleVariantSelection(item.type)}
                                />
                                {item.type}
                              </div>

                            </label>
                          </td>
                          <td>
                            <div className="quantity-btn">
                              <button onClick={() => handleDecrement(item.type)}>-</button>
                              <span>{selectedQuantities[item.type] || 0}</span>
                              <button onClick={() => handleIncrement(item.type)}>+</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : null}
              </Row>
              <hr />
              <div className="showssss">
                <Button onClick={() => {
                  if (Object.keys(selectedQuantities).length > 0) {

                    handleSubmit()
                  } else {
                    toast.error("Please select at least one item");
                  }
                }} className="showSize">
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
          {/* <button onClick={handleSubmit}>Add to Cart</button> */}
        </Modal.Body>



      </Modal>
    </>
  );
}
export default ProductDetails;
