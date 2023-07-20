import React from "react";
import Header from "../../directives/header";
import { Button, Table, Col, Container, Row, Modal } from "react-bootstrap";
import ring2 from "../../assets/images/img/ring2.png";
import Footer from "../../directives/footer";
import { Link, useNavigate } from "react-router-dom";
import border from "../../assets/images/banner/border.png";
import { BASE_URL } from "../../Constant/Index";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Addcart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const address = localStorage.getItem("address");
  console.log("span", address);
  const storedId = localStorage.getItem("id");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    latestsapidata();
    EditProfile();
  }, []);

  const navigate = useNavigate();
  const loginId = localStorage.getItem("id");
  const state = localStorage.getItem("state");
  const city = localStorage.getItem("city");
  const pincode = localStorage.getItem("pincode");

  const [carddata, setCardData] = useState([]);

  const latestsapidata = () => {
    axios
      .get(`${BASE_URL}/products/card`)
      .then((response) => {
        console.log(response.data);
        setCardData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  //   console.error("Error fetching data:", variantdata);

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

  // raksha code

  const EditProfile = async (e) => {
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    await fetch(`${BASE_URL}/customer/info?id=${storedId}`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        setFirstName(response.data.f_name);
        setLastName(response.data.l_name);

        setEmail(response.data.email);

        setPhone(response.data.phone);
      })
      .catch((error) => {
        console.error("ERROR FOUND---->>>>" + error);
      });
  };

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
        toast.success("Order Successfully");

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
      <Toaster />
      <Header />
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="add-card-AREA">
                <div>
                  {carddata
                    ? carddata.map((item, index) => (
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
                    : null}
                </div>
                <h4>Shipping Address</h4>
                <Table responsive className="">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>
                        {firstName}
                        {lastName}
                      </td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>{phone}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <th>Full Address</th>
                      <td>{address}</td>
                    </tr>
                    <tr>
                      <th>Pincode</th>
                      <td>{pincode}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center mt-3">
          <Link className="showSize" onClick={handleShow}>
            Submit
          </Link>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Order Confirmation</Modal.Title>
          </Modal.Header>
          {/* <Modal.Body>
            I will not close if you click outside me. Don not even try to press
            escape key.
          </Modal.Body> */}
          <Modal.Footer>
            <Button variant="btn btn-danger" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={handlePlaceOrder}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
      <Footer />
    </>
  );
}
export default Addcart;
