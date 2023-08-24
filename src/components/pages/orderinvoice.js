import React from "react";
import Header from "../../directives/header";
import { Button, Modal, Col, Row, Table } from "react-bootstrap";
import logo from "../../assets/images/logo/logo.png";
import Footer from "../../directives/footer";
import border from "../../assets/images/banner/border.png";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { BASE_URL } from "../../Constant/Index";
import { useState } from "react";
import axios from "axios";
const customStyles = {
  content: {
    width: "50%",
    height: "50%",
    maxWidth: "300px",
    margin: "0 auto",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
  },
};
function Orderinvoice() {
  const storedId = localStorage.getItem("id");
  const orderId = localStorage.getItem("order_id");
  const address = localStorage.getItem("address");
  const [filterOrder, setFilterOrder] = useState("");
  const { id } = useParams();
  console.log(id, "id");
  const [productName, setProductName] = useState("");
  const [orderlistdata, setOrderListData] = useState([]);
  const [productOrderId, setProductOrderId] = useState("");
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [quantity, setProductQuantity] = useState("");
  const [variation, setVariation] = useState("");
  const [variation1, setVariation1] = useState("");
  const [variation2, setVariation2] = useState("");
  const [textAmount, setTextAmount] = useState("");
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [design, setdesign] = useState("");
  const [orderList, setOrderList] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    productsList();
    EditProfile();
    handleProductsList(orderId);
  }, [orderId]);
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
        setFirstName(response.data.f_name);
        setLastName(response.data.l_name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setdesign(response.data.design);
      })
      .catch((error) => {
        console.error("ERROR FOUND---->>>>" + error);
      });
  };
  const handleProductsList = async (orderId) => {
    const requestBody = {
      id: storedId,
    };
    fetch("https://veejayjewels.com/api/v1/products/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        setOrderList(data.data);
        handleInvoiceFilter(data.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  };
  const capitalizeFirstLetter = (str) => {
    if (!str || typeof str !== "string") {
      return str; // Return the input as it is if it's not a valid string
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleInvoiceFilter = (data) => {
    console.log(data, "data");
    const filteredOrder = data.find((order) => order.id == id);
    setFilterOrder(filteredOrder.invoice);
  };
  console.log("filterOrder", filterOrder);
  const productsList = () => {
    axios
      .get(`https://veejayjewels.com/api/v1/products/details`, {
        params: {
          id: id,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://localhost:3000/",
        },
      })
      .then((response) => {
        console.log("products/details", response);
        setProductName(response.data.data)
        setOrderListData(response.data.data);
        setProductOrderId(response.data.data[0].order_id);
        setProductId(response.data.data[0].product_id);
        // setProductQuantity(response.data.data[0].quantity);
        setProductPrice(response.data.data[0].price);
        // setProductName(response.data.data[0].product_name);
        // setVariation(response.data.data[1].variation);invoice
        // setVariation1(response.data.data[1].variation1);
        // setVariation2(response.data.data[2].variation2);
        setTextAmount(response.data.data[0].tax_amount);
        setProductPrice(response.data.data[0].price);
        setProductPrice(response.data.data[0].price);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log("productName  ", productName);
  return (
    <>
      <Header />
      <section className="section-padding">
        <Row className="justify-content-center mb-3">
          <Col lg={5}>
            <div className="invoice-cardnew-area">
              <div className="invoice-cardnew">
                <img src={logo} />
                <h3>
                  Order Id: <span>{id}</span>
                </h3>
                <h3>
                  Invoice Id: <span>{filterOrder}</span>
                </h3>
              </div>
              <div className="add-border">
                <img src={border} />
              </div>
              <div className="order-invoiceN">
                {productName ? (
                  productName.map((items, index) => (
                    <div key={index}>
                      <h6>Product name: {items.product_name}</h6>
                      <h6>Variation: {items.variation}</h6>
                      <h6>Quantity: {items.quantity}</h6>
                      <h6>Design Number: {items.design}</h6>
                      <hr />
                    </div>
                  ))
                ) : null}
                <Table responsive className="productDetailTable">
                  <tbody>
                    {/* {productName?(
                    productName.map((items,index)=>(
                      <tr key={index}>
                    <td>{items.product_name}</td>
                    <td>{items.variation}</td>
                    <td>{items.quantity}</td>
                    <hr/>
                   </tr>
               ))
               ):null} */}
                    <tr>
                      <th>Name:</th>
                      <td>
                        {capitalizeFirstLetter(firstName)}
                        {capitalizeFirstLetter(lastName)}
                      </td>
                    </tr>
                    <tr>
                      <th>Email:</th>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <th>Phone:</th>
                      <td>{phone}</td>
                    </tr>
                    <tr>
                      <th>Delivery Address:</th>
                      <td>{address}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="add-border">
                <img src={border} />
              </div>
              <div className="text-center mt-3">
                <Link className="showSize" to="/products">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        {/* <div className="text-center">
          <Link className="showSize" onClick={handleShow}>
            Submit
          </Link>
        </div> */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don not even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </section>
      <Footer />
    </>
  );
}
export default Orderinvoice;