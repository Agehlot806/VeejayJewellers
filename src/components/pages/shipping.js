import React from "react";
import Header from "../../directives/header";
import { Button, Table, Col, Container, Row, Modal } from "react-bootstrap";
import ring2 from "../../assets/images/img/ring2.png";
import Footer from "../../directives/footer";
import { Link, useNavigate } from "react-router-dom";
import border from "../../assets/images/banner/border.png";
import { BASE_URL } from "../../Constant/Index";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Input } from "reactstrap";

function Addcart() {
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const address = localStorage.getItem("address");
  // const [addressEdit,setAddress]=useState("")
  // setAddress(address)
  const [shippingOrder, setShippingModel] = useState(false);
  const minProductValue = 1; // Minimum value for the quantity
  const maxProductValue = 50; // Maximum value for the quantity
  const [quantity, setQuantity] = useState(minProductValue);
  const storedId = localStorage.getItem("id");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const loginId = localStorage.getItem("id");
  console.log("loginIdloginIdloginId", loginId);
  // const statedemo = localStorage.getItem("state");
  // const city = localStorage.getItem("city");
  // const pincode = localStorage.getItem("pincode");

  const [carddata, setCardData] = useState([]);

 

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOrder(false);
  //     navigate("/order-invoice"); // Close the modal after 5 seconds
  //   }, 5000);

  //   return () => clearTimeout(timer); // Clear the timer when the component unmounts
  // }, []);
  const [address, setAddres] = useState('')
  const [stateall, setstate] = useState('');
  const [cityall, setcity] = useState('');
  const [pincodeall, setpincode] = useState('');
  // useEffect to retrieve and set the address from localStorage
  // useEffect(() => {
  //   const storedAddress = localStorage.getItem('address');
  //   setAddressedit(storedAddress || ''); // If storedAddress is null or undefined, set an empty string as the initial state
  // }, []);

  useEffect(() => {
    latestsapidata();
    EditProfile();
    getDataAll();
  }, []);
  const handleModelClose = () => {
    setOrder(false);
    navigate("/order-invoice");
  };
  const handleModelShow = () => {
    setOrder(true);
    handleClose();
  };
  const latestsapidata = () => {
  axios
    .get(`${BASE_URL}/products/card`)
    .then((response) => {
      console.log(response.data);
      setCardData(response.data.data);
      console.log("shyam----------:", response);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
  //   console.error("Error fetching data:", variantdata);

  const parseVariant = (variant) => {
    try {
      return JSON.parse(variant);
    } catch (error) {
      console.error("Error parsing variant:", error);
      return [];
    }
  };
  console.log(stateall, "stateallstateall");
  // raksha code

  const EditProfile = async (e) => {
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    await fetch(`${BASE_URL}/customer/info?id=${storedId}`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response url " + `${BASE_URL}/customer/info?id=${storedId}`, response);
        setFirstName(response.data.f_name);
        setLastName(response.data.l_name);

        setEmail(response.data.email);
        setAddres(response.data.address);
        setstate(response.data.state)
        setcity(response.data.city)
        setpincode(response.data.pincode)

        setPhone(response.data.phone);
      })
      .catch((error) => {
        console.error("ERROR FOUND---->>>>" + error);
      });
  };

  const handlePlaceOrder = () => {
    const cards = carddata.map((item) => {
      // Parse the variant data
      const variantData = parseVariant(item.variant);
      
      // Check if the variantData is an array and not empty
      if (!Array.isArray(variantData) || variantData.length === 0) {
        console.error("Invalid variant data for item:", item);
        return null;
      }
  
      const { product_id, quantity, variant } = variantData;
      
      return {
        product_id: item.product_id,
        quantity,
        variation: variant,
        image: item.image, // Add the image property to the card object
        product_name: item.product_name, // Add the product_name property to the card object
      };
    });
    
    // Rest of the code remains the same...
  };
  

  // console.log("addrescardscardssEdit", cards);

  // const updateProfileData1 = (e) => {
  //   e.preventDefault();
  //   console.log("7876876767676");
  //   const formData = new FormData();

  //   formData.append("address", address);

  //   axios
  //     .post(`${BASE_URL}/customer/update-profile`, formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //       // withCredentials: true,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })

  //     .catch((error) => {
  //       // console.log(error.response.data);
  //     });
  // };


  const updateProfileData = (e) => {
    e.preventDefault();
    console.log("7876876767676");
    const formData = new FormData();
    formData.append("f_name", firstName);
    formData.append("l_name", lastName);
    formData.append("phone", phone);
    formData.append("email", email);
    // formData.append("image", uploadImage);
    formData.append("id", storedId);
    formData.append("state", selectedStateName);
    formData.append("city", citydata);
    formData.append("pincode", pincodeall);
    formData.append("address", address);

    axios
      .post(`${BASE_URL}/customer/update-profile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        // withCredentials: true,
      })
      .then((response) => {
        // setImageProfile(response.data.data.image);
        toast.success("Successfuly Updated");
      })

      .catch((error) => {
        // console.log(error.response.data);
      });
  };

  const [stateallCity, setStateallCity] = useState([]);
  const [statealldata, setStatealldata] = useState([]);
  const [statedata, setStatedata] = useState([]);
  const [citydata, setCitydata] = useState([]);

  const getDataAll = async () => {
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(`${BASE_URL}/auth/state`, {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        setStatealldata(data.state);
        // console.log("respostate", data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("ERROR FOUND---->>>>" + error);
    }
  };

  const [selectedStateName, setSelectedStateName] = useState('');
  // const [stateid, setStateid] = useState('');

  const handleSelectChange = (event) => {
    const selectedIdValue = event.target.value;
    const selectedStateNameValue = event.target.options[event.target.selectedIndex].text;
    Getdatacity(event.target.value);
    setStatedata(selectedIdValue);
    setSelectedStateName(selectedStateNameValue);
  };

  const Getdatacity = (statedata) => {
    const formData = new FormData();
    formData.append("state", statedata);
    axios
      .post(`${BASE_URL}/auth/city`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data);
        setStateallCity(response.data.state);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const Subscriptioncity = (event) => {
    setCitydata(event.target.value);
  };


  const fieldpagerefresh = () => {
    window.location.reload(false);
  }


  return (
    <>
      <Toaster />
      <Header />
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <div className="add-card-AREA">
                <div>
                  {carddata
                    ? carddata.map((item, index) => (
                      <Row className="align-self-center mb-3" key={index}>
                        <Col lg={4} xs={3}>
                          <div className="add-cart">
                            <img src={item.image} alt={item.product_name} />
                          </div>
                        </Col>
                        <Col lg={8} xs={6} className="">
                          <div className="add-cart-content">
                            <h2>{item.product_name}</h2>

                            {item.variant && (
                              <ul>
                                {parseVariant(item.variant).map(
                                  (variantItem, index) => (
                                    <li key={index}>
                                      Variant:{" "}
                                      {variantItem.variant
                                        ? variantItem.variant
                                        : "N/A"}
                                      , Quantity: {variantItem.quantity}
                                    </li>
                                  )
                                )}
                              </ul>
                            )}

                            {/* <button
                        className="showSize"
                      >
                        <Link to={`/product-details/${item.id}`}><i className="fa fa-pencil" /></Link>
                      </button> */}
                          </div>
                        </Col>
                        <div className="text-center">
                          <hr />
                        </div>
                      </Row>
                    ))
                    : null}
                </div>
                <h4>Shipping Address</h4>
                <Table responsive className="">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>
                        {firstName}
                        {lastName}
                      </td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>{phone}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{email}</td>
                    </tr>
                    <tr>
                      <th>State</th>
                      <td>{stateall}</td>
                    </tr>
                    <tr>
                      <th>City</th>
                      <td>{cityall}</td>
                    </tr>
                    <tr>
                      <th>Full Address</th>
                      <td>{address}</td>
                    </tr>
                    <tr>
                      <th>New Address</th>
                      <td><button className="neweditadd" data-toggle="modal" data-target="#exampleModal">Click for New Address</button></td>
                    </tr>
                    <tr>
                      <th>Pincode</th>
                      <td>{pincodeall}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center mt-3">
          <Link className="showSize1" onClick={handleShow}>
            Submit
          </Link>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="order-confi"
        >
          {/* <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div className="show-area">
              <div className="show-areatext">
                <div className="text-center">
                  <h3>Order Confirmation</h3>
                </div>
              </div>

              <div className="showSizearea">
                <Button variant="btn" onClick={handleClose}>
                  <i className="fa fa-times" /> No
                </Button>
                <Button variant="btn" onClick={handlePlaceOrder}>
                  <i className="fa fa-check" /> Yes
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal show={order} onHide={handleModelClose} className="order-confi">
          {/* <Modal.Header closeButton></Modal.Header> */}
          <Modal.Body>
            <div className="show-area">
              <Modal.Header closeButton>
              <h2 className="order-success-heading">
                  Order Successfully Placed!
                </h2>
              </Modal.Header>
              <div className="showSizearea Order-Successfully">
                
                <p className="order-success-message">
                  Thank you for your order. Your purchase was successful.
                </p>
              </div>
            </div>

          </Modal.Body>
        </Modal>
      </section>
      <Footer />


      {/* Button trigger modal */}

      {/* Modal */}
      <div className="modal fade editAddress" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit For New Address</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" onClick={fieldpagerefresh}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div class="form-group">
                <label for="exampleFormControlInput1">New address</label>
                <input class="form-control" type="text" value={address} onChange={(e) => setAddres(e.target.value)} />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">State</label>
                <select class="form-control"
                  aria-label="Default select example"
                  onChange={handleSelectChange}
                  value={statedata}
                >
                  <option>{stateall}</option>
                  {statealldata.map((items) => (
                    <option value={items.id} key={items.id}>
                      {items.state_name}
                    </option>
                  ))}
                </select>


              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">City</label>
                <select class="form-control"
                  aria-label="Default select example"
                  onChange={Subscriptioncity}
                  value={citydata}
                >
                  <option>{cityall}</option>
                  {stateallCity &&
                    stateallCity.map((items) => (
                      <option value={items.city_name} key={items.id}>
                        {items.city_name}
                      </option>
                    ))}
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Pincode</label>
                <input class="form-control" type="text" value={pincodeall} onChange={(e) => setpincode(e.target.value)} />
              </div>

            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
              <button type="button" className="btn btn-primary" onClick={updateProfileData} >Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Addcart;
