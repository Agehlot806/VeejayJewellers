import React from 'react'
import Header from '../../directives/header'
import { Col, Container, Row } from 'react-bootstrap'
import image15 from "../../assets/images/banner/image 15.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { BASE_URL } from "../../Constant/Index";

function Customorder() {
  const [allCustomorder, setAllCustomorder] = useState([]);
  const loginId = localStorage.getItem("id");
  useEffect(() => {
    AllCustomorder();
  }, []);

  const AllCustomorder = () => {
    axios
      .get(`${BASE_URL}/products/custom_list/${loginId}`)
      .then((response) => {
        console.log( "responseresponse",response.data);
        setAllCustomorder(response.data.data);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <Header />
      <section className='section-padding'>
        <Container>
          <Row>
            {allCustomorder.map((item) => (
              <Col
                lg={4}
                sm={4}
                xs={6}
                className="mb-4"
              >
                <div className="mainProductcard">
                  <img src={"https://veejayjewels.com/storage/app/public/notification/" + item.image} />
                  <h4>{item.title}</h4>
                  <p>
                    {item.description}
                  </p>
                  <span>Quantity : {item.quantity}</span><br />
                  <span>Date : {item.need_product}</span><br />
                  <span>Size : {item.size}</span>
                  <div className="product-btnarea">
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Customorder