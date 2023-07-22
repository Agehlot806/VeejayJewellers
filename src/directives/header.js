import { Dropdown, Container, Form, Nav, Navbar, Table,Modal,Button } from "react-bootstrap";
import logo from "../assets/images/logo/logo.png";
import shoppingIcon from "../assets/images/icons/bag-2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Constant/Index";
import ProfileImage from "../assets/images/icons/Profile.png";

function Header({ profileImage }) {
  const navigate = useNavigate();
  const [brandcategories, setbrandcategories] = useState([]);
  const [shownotifications, setShownotifications] = useState(false);
  const [notifications, setNotification] = useState([]);
  const profile = localStorage.getItem("profileImage");
  // const uploadImageURL = localStorage.getItem("uploadImageURL");
  const imageUrl = `https://veejayjewels.com/public/${profile}`;
  const latestProfile = `https://veejayjewels.com/public/${profileImage}`;
  // console.log("imageUrl", profile, profileImage);
  useEffect(() => {
    categorys();
    notification();
  }, []);

  
  const categorys = () => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((response) => {
        setbrandcategories(response.data.data);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  };
  // console.log("brandcategoriesbrandcategories", brandcategories);

  const notification = () => {
    axios
      .get(`${BASE_URL}/notifications`)
      .then((response) => {
        // console.log("respon",response.data.data);
        setNotification(response.data.data)
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  };

  const handleClose = () => setShownotifications(false);
  const handleShow = () => setShownotifications(true);
  return (
    <>
      <Navbar bg="white" expand="lg" className="header-bg">
        <Container>
          <div className="header-rate">
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} className="logo" alt="" />
              </Link>
              <Link className="text-center">
                <Dropdown className="dropdown-rate">
                  <Dropdown.Toggle id="dropdown-basic">Rate</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Table id>
                      <tbody>
                        <tr><td>Gold 24 KT</td><td>Rs. 5868.10 <span>per gm</span></td></tr>
                        <tr><td>Gold 22 KT</td><td>Rs. 5461.40 <span>per gm</span></td></tr>
                        <tr><td>Gold 18 KT</td><td className>Rs. 4648.00 <span>per gm</span></td></tr>
                        <tr><td>Pure Silver </td><td className="silver_rate">Rs. 70.50 <span>per gm</span></td></tr>
                      </tbody>
                    </Table>
                    <div className="updated">
                      <p><b>Updated On:</b><br />28/06/23 11:00 AM </p>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="header-menu ms-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">AboutUs</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/products">Product</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">Brands</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {brandcategories &&
                      brandcategories.map((item) => (
                        <Dropdown.Item href="" key={item.id}>
                          <i className="fa fa-angle-double-right" />{" "}
                          <Link to={`/brands/${item.id}/${item.name}`}>
                            {item.name}
                          </Link>
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link> */}
              {/* <Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">Product</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/bangles">Bangle</Link>{" "}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/nacklaces">Necklaces</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/chains">Chains</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/rings">Rings</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/earrings">Earrings</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/bracelets">Bracelets</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link> */}
              <Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">Catalogue</Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="">
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/women">Women</Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/men">Men</Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/kids">Kids</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contacts</Link>
              </Nav.Link>
              <Nav.Link className="header-bag">
                <Link to="/calculator">
                  <i className="fa fa-calculator" />
                </Link>
              </Nav.Link>
              <Nav.Link className="header-bag">
                <Link to="/add-to-cart">
                  <i className="fa fa-shopping-bag" />
                </Link>
              </Nav.Link>
              <Nav.Link className="header-bag">
                <i className="fa fa-bell-o" onClick={handleShow}></i>
                {/* <span className="ball-count">1</span> */}
              </Nav.Link>
              
              <Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="hidearrow">
                  <img
                  className="profile-icon"
                  // src={ProfileImage}
                  src={
                    profileImage
                      ? latestProfile
                      : profile
                        ? imageUrl
                        : ProfileImage
                  }
                  alt=""
                ></img>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="">
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/check-invoice">My Order</Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <i className="fa fa-angle-double-right" />{" "}
                      <Link to="/profile">Profile</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>

              {/* <Nav.Link className="">
                <img
                  className="profile-icon"
                  // src={ProfileImage}
                  src={
                    profileImage
                      ? latestProfile
                      : profile
                        ? imageUrl
                        : ProfileImage
                  }
                  alt=""
                  onClick={navigateToProfileEdit}
                ></img>

              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      <Modal show={shownotifications} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <tbody>
                {notifications ? notifications.map((items, index) => (
                  <tr key={index}>
                    <td><img src={"https://veejayjewels.com/storage/app/public/notification/" + items.image} /></td>
                    <td className="p-2">{items.title}<br />{items.description}</td>
                  </tr>
                )) : ""}
              </tbody>
        </Modal.Body>
        
      </Modal>
    </>

  );
}

export default Header;
