import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import app1 from "../assets/images/img-icon/app1.png";
import app2 from "../assets/images/img-icon/app2.png";

function Footer(props) {
  const userStatus = localStorage.getItem("status");
  const phone = localStorage.getItem("phone");

  const onPressVerify = () => {
    console.log("onPressVerify Called");
    props.setShow(true);
  };
  return (
    <>
      <footer className="footer-bg">
        <div className="section-padding">
          <Container>
            <Row>
              <Col lg={3} sm={6} xs={6}>
                <div className="footer-list">
                  <h5>Useful Links</h5>
                  <ul>
                    <li>
                      <Link>Delivery Details</Link>
                    </li>
                    <li>
                      <Link>Return</Link>
                    </li>
                    <li>
                      <Link>Find a Store</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} sm={6} xs={6}>
                <div className="footer-list">
                  <h5>Information</h5>
                  <ul>
                    {/* <li><Link>Careers</Link></li> */}
                    <li>
                      {userStatus == "unverified" ? (
                        <Link onClick={() => onPressVerify()}>AboutUs</Link>
                      ) : (
                        <Link to={phone ? `/about` : "/login"}>AboutUs</Link>
                      )}
                    </li>
                    {/* <li><Link to='/offers-details'>Offers Details</Link></li> */}
                    <li>
                    {userStatus == "unverified" ? (
                      <Link onClick={() => onPressVerify()}>Help & FAQs</Link>
                      ):(
                        <Link to={phone ? `/helpandFAQs` : "/login"} >Help & FAQs</Link>
                      )}
                    </li>
                    <li>
                    {userStatus == "unverified" ? (
                      <Link onClick={() => onPressVerify()}>Blog</Link>
                    ):(
                        <Link to={phone ? `/blog` : "/login"} >Blog</Link>
                    )}
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} sm={6} xs={6}>
                <div className="footer-list">
                  <h5>Contact Us</h5>
                  <ul>
                    <li>
                      <Link to="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%2Femail&followup=https%3A%2F%2Fmyaccount.google.com%2Femail&ifkv=AXo7B7Xm-1RBYi8bBLAiZ5QxsIe8sy0uR4DDsBI5-wCY2jT0YmZ0XyP6ueHOjBTxAEja4ZXnyp6_&osid=1&passive=1209600&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S285245534%3A1692185345192690">
                        <i className="fa fa-envelope-o" /> info@veejayjewels.com
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <i className="fa fa-phone" /> 9699919991,8454906041
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.whatsapp.com/">
                        <i className="fa fa-whatsapp" /> Chat Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} sm={6} xs={6}>
                <div className="footer-list">
                  <h5>Download The Apps</h5>
                  <ul>
                    <li>
                      <Link>
                        <img src={app1} />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src={app2} />
                      </Link>
                    </li>
                    <li className="social-media">
                      <span>Follow Us On</span>
                      <Link>
                        <i class="fa fa-facebook" />
                      </Link>
                      <Link>
                        <i class="fa fa-twitter" />
                      </Link>
                      <Link to="https://instagram.com/veejayjewels?igshid=MzRlODBiNWFlZA==">
                        <i class="fa fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <hr />
        <div className="footer-content">
          <h6>
            @ 2023 Veejay jewels company limited. All right reserved. <br />
            Tearm & conditions | Privacy policy
          </h6>
        </div>
      </footer>
    </>
  );
}

export default Footer;
