import React, { useState } from "react";
import Header from "../../directives/header";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../../directives/footer";

function Customdesign() {
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [uploadImage, setUploadImage] = useState([]);
  const [selectImage, setSelectedImage] = useState("");

  const handleUploadImage = (event) => {
    setShowPreview(false);
    setUploadImage(event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };
  const handleSubmitForm = () => {};
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
                <Form onSubmit={(e) => handleSubmitForm(e)}>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter  Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Size</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>When Do You need The product ?</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="dd/mm/yyyy"
                        value={date}
                        onChange={(e) => setDate(e.target.vallue)}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label> Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>
                        Upload images to help guide your request (JPG, GIF, PNG)
                      </Form.Label>
                      <Form.Control type="file" onChange={handleUploadImage} />
                    </Form.Group>
                    <img
                      src={showPreview ? uploadImage : selectImage}
                      alt="file"
                    ></img>
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
