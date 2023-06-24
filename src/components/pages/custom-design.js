import React from "react";
import Header from "../../directives/header";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../../directives/footer";

function Customdesign() {
  return (
    <>
      <Header />
      <div className="allPage-bg">
        <div className="section-padding">
          <div className="AllPage-area">
            <Container>
              <Row>
                <Col lg={7}>
                  <h2>CUSTOM DESIGN</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <h4 className="main-heading text-center">Custom Design</h4>
              <p className="text-center">
                Visit our showroom for all your jewelry needs
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={10}>
              <div className="contact-form">
                <h2>Ready to Get Started?</h2>
                <p>
                  Please complete the required fields below to make an
                  appointment *
                </p>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter phone number"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Product Type</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option selected="true" disabled="disabled">
                          Select Type
                        </option>
                        <option value="Engagement Ring">Engagement Ring</option>
                        <option value="Wedding Band">Wedding Band</option>
                        <option value="Ring">Ring</option>
                        <option value="Earrings">Earrings</option>
                        <option value="Necklace">Necklace</option>
                        <option value="Bracelet">Bracelet</option>
                        <option value="Eternity Band">Eternity Band</option>
                        <option value="Pendant">Pendant</option>
                        <option value="Band">Band</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Price Range</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option selected="true" disabled="disabled">
                          Select Price
                        </option>
                        <option value="Under 1000$">Under 1000$</option>
                        <option value="Under 2000$">Under 3000$</option>
                        <option value="Under 6000$">Under 6000$</option>
                        <option value="Under 9000$">Under 9000$</option>
                        <option value="Under 15000$">Under 15000$</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>What’s More Important</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option selected="true" disabled="disabled">
                          Select---
                        </option>
                        <option value="Size">Size</option>
                        <option value="Quality">Quality</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>When Do You Need The Product?</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>
                        Upload images to help guide your request (JPG, GIF, PNG)
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Row>
                  <div className="mt-5">
                    <Button className="main-btn">
                      <i className="fa fa-angle-double-right" /> Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Customdesign;
