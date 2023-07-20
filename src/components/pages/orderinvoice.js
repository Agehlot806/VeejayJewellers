import React from "react";
import Header from "../../directives/header";
import { Button, Modal, Col, Row, Table } from "react-bootstrap";
import ring2 from "../../assets/images/img/ring2.png";
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
  const { id } = useParams();
  const [productName, setProductName] = useState("");
  const [orderlistdata, setOrderListData] = useState([]);
  const [productOrderId, setProductOrderId] = useState("");
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [quantity, setProductQuantity] = useState("");
  const [variation, setVariation] = useState("");
  const [textAmount, setTextAmount] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    productsList();
  }, []);

  const productsList = () => {
    axios
      .get(`https://veejayjewels.com/api/v1/products/details`, {
        params: {
          id: id,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000/",
        },
      })
      .then((response) => {
        setOrderListData(response.data.data);
        setProductOrderId(response.data.data[0].order_id);
        setProductId(response.data.data[0].product_id);
        setProductQuantity(response.data.data[0].quantity);
        setProductPrice(response.data.data[0].price);
        setProductName(response.data.data[0].productName);
        setVariation(response.data.data[0].variation);
        setTextAmount(response.data.data[0].tax_amount);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log("====================================");
  console.log("productname", productName);
  console.log("====================================");
  return (
    <>
      <Header />

      <section className="section-padding">
        <Row className="justify-content-center mb-3">
          <Col lg={5}>
            <Table responsive className="productDetailTable">
              <tbody>
                <tr>
                  <th>Product Id</th>
                  <td>{productId}</td>
                </tr>
                <tr>
                  <th>Order Id</th>
                  <td>{productOrderId}</td>
                </tr>
                <tr>
                  <th>Quantity</th>
                  <td>{quantity}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>{productPrice}</td>
                </tr>
                <tr>
                  <th>Product Name</th>
                  <td>{productName}</td>
                </tr>
                <tr>
                  <th>Variation</th>
                  <td>{variation}</td>
                </tr>
                <tr>
                  <th>Text Amount</th>
                  <td>{textAmount}</td>
                </tr>
                {/* <tr>
                  <th>Weight</th>
                  <td>10 gms</td>
                </tr> */}
              </tbody>
            </Table>

            <div className="add-border">
              <img src={border} />
            </div>
          </Col>
        </Row>
        <div className="text-center">
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
