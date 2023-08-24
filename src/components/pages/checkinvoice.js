import React from "react";
import Header from "../../directives/header";
import { Col, Row, Table, Container } from "react-bootstrap";
import ring2 from "../../assets/images/img/ring2.png";
import Footer from "../../directives/footer";
import border from "../../assets/images/banner/border.png";
import { Link } from "react-router-dom";
import product2 from "../../assets/images/img/product2.png";
import { BASE_URL } from "../../Constant/Index";
import logo from "../../assets/images/logo/logo.png";
import { useState } from "react";
import { useEffect } from "react";


function Checkinvoice() {
  const Id = localStorage.getItem("id");
  console.log("id", Id);

  useEffect(() => {
    productsList();
  }, []);

  const loginId = localStorage.getItem("id");
  // console.log("loginId", loginId);
  const [orderlistdata, setOrderListData] = useState([]);

  const productsList = async () => {
    const requestBody = {
      id: Id,
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
        console.log("data",data.data);
        // localStorage.setItem("id");
        setOrderListData(data.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  };

  const getDateFromCreatedAt = (createdAt) => {
    const dateObject = new Date(createdAt);
    return dateObject.toLocaleDateString();
  };

  // console.log("orderlistdata", orderlistdata);
  return (
    <>
      <Header />
      {/* <section className="section-padding">
                <Row className="justify-content-center mb-3">
                    <Col lg={5}>
                        <Table responsive className="productDetailTable">
                            <tbody>
                                <tr>
                                    <th>Product Name</th>
                                    <td>Gold Ring</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>2.5</td>
                                </tr>
                                <tr>
                                    <th>Quantity</th>
                                    <td>4 Pcs</td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>10 gms</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="add-border">
                            <img src={border} />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-3">
                    <Col lg={5}>
                        <Table responsive className="productDetailTable">
                            <tbody>
                                <tr>
                                    <th>Product Name</th>
                                    <td>Gold Ring</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>2.5</td>
                                </tr>
                                <tr>
                                    <th>Quantity</th>
                                    <td>4 Pcs</td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>10 gms</td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="add-border">
                            <img src={border} />
                        </div>
                    </Col>
                </Row>
                <div className='text-center'>
                    <Link to='/order-invoice' className="showSize">
                        Check Invoice
                    </Link>
                </div>
            </section> */}
      {/* <button onClick={productsList}>productsList</button> */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="aboutHome">
                <h3>My Orders</h3>
                <img src={border} />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4 mb-4">
            {orderlistdata
              ? orderlistdata.map((item, index) => (
                <Col lg={8} className="mb-4">
                  <Link to={"/order-invoice/" + item.id}>
                  {/* <Link to="/order-invoice"> */}

                    <div className="mainProductcard">
                      <Row >
                        <Col lg={4} sm={4}>
                          <img src={logo} />
                        </Col>
                        <Col lg={8} sm={8}>
                          <div style={{textAlign:"left"}}>
                            <h4>Order Id: {item.id}  <span>Date:  {getDateFromCreatedAt(item.created_at)}</span></h4>
                            <h4>Order Status: {item.order_status}</h4>
                            <h4>Order address: {item.delivery_address}</h4>
                          </div>
                        </Col>
                      </Row>


                    </div>
                  </Link>
                </Col>
              ))
              : null}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
export default Checkinvoice;
