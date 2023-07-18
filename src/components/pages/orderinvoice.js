import React from "react";
import Header from "../../directives/header";
import { Col, Row, Table } from "react-bootstrap";
import ring2 from "../../assets/images/img/ring2.png";
import Footer from "../../directives/footer";
import border from "../../assets/images/banner/border.png";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { BASE_URL } from "../../Constant/Index";
import { useState } from "react";
import axios from "axios";
function Orderinvoice() {
  const { id } = useParams();
  console.log("id", id);
  const [orderlistdata, setOrderListData] = useState([]);

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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log("orderlistdataorderlistdata", orderlistdata);
  return (
    <>
      <Header />

      <section className="section-padding">
        <Row className="justify-content-center mb-3">
          <Col lg={5}>
            {/* <Table responsive className="productDetailTable">
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
            </Table> */}
                       <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Product ID</th>
          <th>Product Name</th>
          {/* Add other table headers here */}
        </tr>
      </thead>
      <tbody>
        {orderlistdata.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.user_id}</td>
            <td>{item.product_id}</td>
            <td>{item.product_name}</td>
            {/* Add other table data here */}
          </tr>
        ))}
      </tbody>
    </table>
            <div className="add-border">
              <img src={border} />
            </div>
          </Col>
        </Row>
        <div className="text-center">
          <Link to="/" className="showSize">
            Submit
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Orderinvoice;
