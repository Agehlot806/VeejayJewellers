import React from "react";
import Header from "../../directives/header";
import { Button, Col, Container, Row } from "react-bootstrap";
import ring2 from "../../assets/images/img/ring2.png";
import Footer from "../../directives/footer";
import { Link, useNavigate } from "react-router-dom";
import border from "../../assets/images/banner/border.png";
import { BASE_URL } from "../../Constant/Index";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Addcart() {
  useEffect(() => {
    latestsapidata();
  }, []);

  const navigate = useNavigate();
  const loginId = localStorage.getItem("id");
  const state = localStorage.getItem("state");
  const city = localStorage.getItem("city");
  const pincode = localStorage.getItem("pincode");

  const [carddata, setCardData] = useState([]);

  const latestsapidata = () => {
    // alert("")
    axios
      .get(`${BASE_URL}/products/card`)
      .then((response) => {
        setCardData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.error("Error fetching data:", carddata.length);
  const deleteDataById = (id) => {
    axios
      .post(`${BASE_URL}/products/discard?id=${id}`)
      .then((response) => {
        console.log(response);
        latestsapidata();
        console.log("Delete Successful");
        // Perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handlePlaceOrder = () => {
  //   const cartData = carddata.map((item) => {
  //     const variants = item.variant && JSON.parse(item.variant);
  //     const mappedVariants = variants.map((variant) => ({
  //       quantity: variant.quantity,
  //       variantion: variant.variant,
  //     }));
  //     return {
  //       product_id: item.product_id,
  //       ...(variants && variants.length > 0 && { variants: mappedVariants }),
  //     };
  //   });

  //   const deliveryAddress = `${state},${city},${pincode}`;
  //   console.log("deliveryAddressdeliveryAddress", deliveryAddress);
  //   const orderData = {
  //     user_id: loginId,
  //     delivery_address: "Delhi city, 461221",
  //     cart: cartData,
  //   };
  //   axios
  //     .post("https://veejayjewels.com/api/v1/products/place", orderData)
  //     .then((response) => {
  //       console.log(response);
  //       // Handle success response
  //       navigate("/check-invoice");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // Handle error
  //     });
  // };

  const parseVariant = (variant) => {
    try {
      return JSON.parse(variant);
    } catch (error) {
      console.error("Error parsing variant:", error);
      return [];
    }
  };

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

  // raksha code
  const handlePlaceOrder = () => {
    const cards = carddata.map((item) => {
      const variantData = JSON.parse(item.variant);
      const { product_id, quantity, variant } = variantData[0];

      return {
        product_id: item.product_id,
        quantity,
        variation: variant,
      };
    });
    // const deliveryAddress = `${state},${city},${pincode}`;
    const postData = {
      user_id: loginId,
      delivery_address: state + " " + city + ", " + pincode,
      cart: cards,
    };

    // Convert the data to JSON
    const jsonData = JSON.stringify(postData);

    // Make the POST request using fetch
    fetch("https://veejayjewels.com/api/v1/products/place", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/shipping");

        // Handle the response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Header />
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="add-card-AREA">
                {carddata ? (
                  carddata.map((item, index) => (
                    <Row className="align-self-center mb-3" key={index}>
                      <Col lg={4} xs={3}>
                        <div className="add-cart">
                          <img src={item.image} alt={item.product_name} />
                        </div>
                      </Col>
                      <Col lg={8} xs={6} className="">
                        <div className="add-cart-content">
                          <h2>{item.product_name}</h2>

                          {item.variant && (
                            <ul>
                              {parseVariant(item.variant).map(
                                (variantItem, index) => (
                                  <li key={index}>
                                    Variant:{" "}
                                    {variantItem.variant
                                      ? variantItem.variant
                                      : "N/A"}
                                    , Quantity: {variantItem.quantity}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                          <button
                            onClick={(e) => deleteDataById(item.id)}
                            className="showSize"
                          >
                            <i className="fa fa-trash-o" />
                          </button>
                          {/* <button
                        className="showSize"
                      >
                        <Link to={`/product-details/${item.id}`}><i className="fa fa-pencil" /></Link>
                      </button> */}
                        </div>
                      </Col>
                      <div className="text-center">
                        <hr />
                      </div>
                    </Row>
                  ))
                ) : (
                  <span style={{ backgroundColor: "green" }}>
                    carddataNo Item Add
                  </span>
                )}
              </div>
            </Col>
          </Row>
        </Container>

        <div>
          <div className="text-center mt-3">
            <Link className="showSize" to="/shipping">
              Submit
            </Link>
          </div>
          <div className="text-center mt-3">
            <Link className="showSize" to="/product">
              Continue Shooping
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Addcart;
