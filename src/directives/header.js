import {
  Dropdown,
  Container,
  Form,
  Nav,
  Navbar,
  Table,
  Modal,
  Button,
  Row,
} from "react-bootstrap";
import logo from "../assets/images/logo/logo.png";
import shoppingIcon from "../assets/images/icons/bag-2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Constant/Index";
import ProfileImage from "../assets/images/icons/Profile.png";

function Header(props) {
  const navigate = useNavigate();
  const [brandcategories, setbrandcategories] = useState([]);
  const [shownotifications, setShownotifications] = useState(false);
  const [notifications, setNotification] = useState([]);
  const profile = localStorage.getItem("profileImage");
  // const uploadImageURL = localStorage.getItem("uploadImageURL");
  const imageUrl = `https://veejayjewels.com/public/${profile}`;
  const latestProfile = `https://veejayjewels.com/public/${props.profileImage}`;
  // console.log("imageUrl", profile, profileImage);
  const phone = localStorage.getItem("phone");
  const loginId = localStorage.getItem("id");
  const userStatus = localStorage.getItem("status");

  useEffect(() => {
    if (phone) {
      categorys();
    }
    notification();
  }, []);

  const categorys = async () => {
    await axios
      .get(`${BASE_URL}/categories/all_childes/${loginId}`)
      .then((response) => {
        setbrandcategories(response.data.data);
        localStorage.setItem("status", response.data.user.status);
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
        setNotification(response.data.data);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  };

  const onPressVerify = () => {
    console.log("onPressVerify Called");
    props.setShow(true);
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
                  <Dropdown.Toggle id="dropdown-basic">
                    {" "}
                    Live Rate
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Table id>
                      <tbody>
                        <tr>
                          <td>Gold 24 KT</td>
                          <td>
                            Rs. 5868.10 <span>per gm</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Gold 22 KT</td>
                          <td>
                            Rs. 5461.40 <span>per gm</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Gold 18 KT</td>
                          <td className>
                            Rs. 4648.00 <span>per gm</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Pure Silver </td>
                          <td className="silver_rate">
                            Rs. 70.50 <span>per gm</span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <div className="updated">
                      <p>
                        <b>Updated On:</b>
                        <br />
                        28/06/23 11:00 AM{" "}
                      </p>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="header-menu ml-auto my-2 my-lg-0"
              // style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/" className="btn-theme-home">
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link>
                {userStatus == "unverified" ? (
                  <a className="btn-theme-home" onClick={() => onPressVerify()}>
                    Products
                  </a>
                ) : (
                  <Link
                    to={phone ? `/products/${"AllProduct"}` : "/login"}
                    className="btn-theme-home"
                  >
                    Products
                  </Link>
                )}
              </Nav.Link>
              {/* <Nav.Link>
                {userStatus == "unverified" ? (
                  <a className="btn-theme-home" onClick={() => onPressVerify()}>
                    Category's
                  </a>
                ) : phone ? (
                  <Dropdown className="btn-theme-home">
                    <Dropdown.Toggle id="dropdown-basic">
                      Category's
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {brandcategories.length > 0 &&
                        brandcategories.map((item) => (
                          <Dropdown.Item href="" key={item.id}>
                            <i className="fa fa-angle-double-right" />
                            <Link
                              to={
                                phone
                                  ? `/products/${item.name}`
                                  : userStatus == "unverified"
                                  ? onPressVerify()
                                  : "/login"
                              }
                            >
                              {item.name}
                            </Link>
                          </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Nav.Link>
                    <Link to={"/login"} className="btn-theme-home">
                      Category's
                    </Link>
                  </Nav.Link>
                )}
              </Nav.Link> */}

              <Nav.Link>
                {userStatus === "unverified" ? (
                  <a className="btn-theme-home" onClick={() => onPressVerify()}>
                    Category's
                  </a>
                ) : phone ? (
                  <div className="mega-dropdown">
                    <Dropdown className="btn-theme-home">
                      <Dropdown.Toggle id="dropdown-basic">
                        Category's
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <div className="mega-dropdown-content">
                          <Row>
                            {brandcategories.length > 0 &&
                              brandcategories.map((item) => (
                                <div className="col-lg-3" key={item.id}>
                                  <Link
                              to={
                                phone
                                  ? `/products/${item.name}`
                                  : userStatus == "unverified"
                                  ? onPressVerify()
                                  : "/login"
                              }
                            >
                              {item.name}
                            </Link>
                                  {/* Add links or other content related to this category */}
                                </div>
                              ))}
                          </Row>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                ) : (
                  <Nav.Link>
                    <Link to={"/login"} className="btn-theme-home">
                      Category's
                    </Link>
                  </Nav.Link>
                )}
              </Nav.Link>

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
                {userStatus == "unverified" ? (
                  <a className="btn-theme-home" onClick={() => onPressVerify()}>
                    Catalogue
                  </a>
                ) : phone ? (
                  <Dropdown className="btn-theme-home">
                    <Dropdown.Toggle id="dropdown-basic">
                      Catalogue
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="">
                        <i className="fa fa-angle-double-right" />{" "}
                        <Link to={phone ? "/women" : "/login"}>Women</Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="">
                        <i className="fa fa-angle-double-right" />{" "}
                        <Link to={phone ? "/men" : "/login"}>Men</Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="">
                        <i className="fa fa-angle-double-right" />{" "}
                        <Link to={phone ? "/kids" : "/login"}>Kids</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Nav.Link>
                    <Link to={"/login"} className="btn-theme-home">
                      Catalogue
                    </Link>
                  </Nav.Link>
                )}
              </Nav.Link>
              <Nav.Link>
              {userStatus == "unverified" ? (
                <Link onClick={() => onPressVerify()} className="btn-theme-home">
                  About Us
                </Link>
              ):(
                <Link to={phone ? `/about` : "/login"} className="btn-theme-home">
                  About Us
                </Link>
              )}
              </Nav.Link>
              <Nav.Link>
              {userStatus == "unverified" ? (
                <Link onClick={() => onPressVerify()} className="btn-theme-home">
                  Contact Us
                </Link>
              ):(
                <Link to={phone ? `/contact` : "/login"} className="btn-theme-home">
                Contact Us
              </Link> 
              )}
              </Nav.Link>
              <Nav.Link className="header-bag">
              {userStatus == "unverified" ? (
                <Link onClick={() => onPressVerify()}>
                  <i className="fa fa-calculator" />
                </Link>
              ):(
                <Link to={phone ? `/calculator` : "/login"}>
                <i className="fa fa-calculator" />
              </Link>
              )}
              </Nav.Link>
              <Nav.Link className="header-bag">
                {userStatus == "unverified" ? (
                  <a onClick={() => onPressVerify()}>
                    <i className="fa fa-shopping-bag" />
                  </a>
                ) : (
                  <Link to={phone ? "/add-to-cart" : "/login"}>
                    <i className="fa fa-shopping-bag" />
                  </Link>
                )}
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
                        props.profileImage
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
                      <i className="fa fa-heart-o" />{" "}
                      {userStatus == "unverified" ? (
                        <Link
                        onClick={() => onPressVerify()}
                      >
                        Favourite Product
                      </Link>
                      ):(
                      <Link
                        to={
                          phone
                            ? "/favourite-product"
                            : userStatus == "unverified"
                            ? onPressVerify()
                            : "/login"
                        }
                      >
                        Favourite Product
                      </Link>
                      )}
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <i className="fa fa-angle-double-right" />{" "}
                      {userStatus == "unverified" ? (
                      <Link onClick={() => onPressVerify()}>Custom Order</Link>
                      ):(
                      <Link to={phone ? "/custom-order" : "/login"}>Custom Order</Link>
                      )}
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <i className="fa fa-angle-double-right" />{" "}
                      {userStatus == "unverified" ? (
                      <Link onClick={() => onPressVerify()}>My Order</Link>
                      ):(
                      <Link to={phone ? "/check-invoice" : "/login"} >My Order</Link>
                      )}
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <i className="fa fa-angle-double-right" />{" "}
                      {userStatus == "unverified" ? (
                      <Link onClick={() => onPressVerify()}>Profile</Link>
                      ):(
                      <Link to={phone ? "/profile" : "/login"} >Profile</Link>
                      )}
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
            {notifications
              ? notifications.map((items, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={
                          "https://veejayjewels.com/storage/app/public/notification/" +
                          items.image
                        }
                      />
                    </td>
                    <td className="p-2">
                      {items.title}
                      <br />
                      {items.description}
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
