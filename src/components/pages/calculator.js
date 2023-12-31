import React from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import {
  Container,
  ProgressBar,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { useState } from "react";
function Calculator() {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(130);

  const [selectedValue, setSelectedValue] = useState("");

  const minProductValue = 1; // Minimum value for the quantity
  const maxProductValue = 50; // Maximum value for the quantity
  const [quantity, setQuantity] = useState(minProductValue);

  const handleRangeChange = (event) => {
    setValue(event.target.value);
    setPrice(130 * event.target.value);

  };

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

  const totalPrice = quantity * price;
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <Header />
      <section className="section-padding calcutor-area">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="calcutor-card">
                <Row>
                  <Col sm={12}>
                    <div className="calcutor">
                      <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Select Gold Kt :</Form.Label>
                        <Form.Control
                          as="select"
                          value={selectedValue}
                          onChange={handleSelectChange}
                        >
                          <option value="">Select</option>
                          <option value="14">14 Kt</option>
                          <option value="16">16 Kt</option>
                          <option value="18">18 Kt</option>
                          <option value="20">20 Kt</option>
                          <option value="22">22 Kt</option>
                          <option value="24">24 Kt</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <h2>Gold Price per Gram: {value}</h2>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={value}
                      onChange={handleRangeChange}
                      className="rangeinput"
                    />
                    <h3>{selectedValue ? price : "00"}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className="calcutor">
                      <div>
                        <Button
                          className="quality"
                          onClick={handleDecrement}
                          disabled={quantity <= minProductValue}
                        >
                          -
                        </Button>
                        <span className="quantity">{quantity}</span>
                        <Button
                          className="quality"
                          onClick={handleIncrement}
                          disabled={quantity >= maxProductValue}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3 mb-3">
                  <Col sm={6}>
                    <h5>Total Price</h5>
                  </Col>
                  <Col sm={6}>
                    <h6>₹ {selectedValue ? totalPrice : "00"}</h6>
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
export default Calculator;

