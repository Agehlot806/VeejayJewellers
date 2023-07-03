import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constant/Index";

function SignupWholesaler() {
  const [step, setStep] = useState(1);
  const [f_name, setf_name] = useState("");
  const [l_name, setl_name] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  // const [temporary_token, settemporary_token] = useState(null);
  const [company_name, setcompany_name] = useState("");
  const [foundation_date, setfoundation_date] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");
  const [gst_number, setgst_number] = useState("");
  const [upload1, setupload1] = useState("");
  const [upload2, setupload2] = useState("");
  const [error, seterror] = useState(false);
  const [stateall, setStateall] = useState([]);
  const [stateallCity, setStateallCity] = useState([]);

  useEffect(() => {
    GetdataAll();
  }, []);

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlewholesales = (e) => {
    e.preventDefault();
    if (
      company_name &&
      foundation_date &&
      state &&
      city &&
      pincode &&
      gst_number &&
      upload1 &&
      upload2
    ) {
      const formData = new FormData();
      formData.append("f_name", f_name);
      formData.append("l_name", l_name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password", confirmpassword);
      formData.append("role", "seller");
      formData.append("temporary_token", "null");
      formData.append("company_name", company_name);
      formData.append("foundation_date", foundation_date);
      formData.append("state", state);
      formData.append("city", city);
      formData.append("pincode", pincode);
      formData.append("gst_number", gst_number);
      formData.append("upload1", upload1);
      formData.append("upload2", upload2);
      axios
        .post(`${BASE_URL}/auth/registration`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
          // withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          toast.success("Registration Successfull");
          // history.push("/all-events");mmit
          // if (
          //   f_name.length == 0 ||
          //   l_name.length == 0 ||
          //   phone.length == 0 ||
          //   email.length == 0 ||
          //   password.length == 0 ||
          //   company_name.length == 0 ||
          //   foundation_date.length == 0 ||
          //   pincode.length == 0 ||
          //   gst_number.length == 0 ||
          //   upload1.length == 0 ||
          //   upload2.length == 0 ||
          //   state.length == 0 ||
          //   city.length == 0
          // ) {
          //   seterror(true);
          // }
        })

        .catch((error) => {
          if (error.response.data == "User Already Exist") {
            toast.error("User Already Exist");
          }
          console.log(error.response.data);
        });
    } else {
      toast.error("Please Enter All Field");
    }
  };
  const GetdataAll = async (e) => {
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    await fetch(`${BASE_URL}/auth/state`, {
      method: "GET",
      headers: headers,
    })
      .then((Response) => Response.json())
      .then((Response) => {
        setStateall(Response.state);
        console.log("respostate", Response);
        // Getdatacity()
      })
      .catch((error) => {
        console.error("ERROR FOUND---->>>>" + error);
      });
  };
  const Getdatacity = (id) => {
    const formData = new FormData();
    formData.append("state", id);

    axios
      .post(`http://veejayjewels.com/api/v1/auth/city`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("responseresponse", response);
        setStateallCity(response.data.state);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log("ERROR FOUND----state>>>>", state);
  // console.log("ERROR FOUND---city->>>>", stateallCity);

  // Function to move to the next step
  const nextStep = () => {
    if (f_name && l_name && email && password && confirmpassword && phone) {
      setStep((prevStep) => prevStep + 1);
    } else {
      toast.error("Please Enter All Fields");
      // alert("fill all fields");
    }
  };

  // Function to move to the previous step
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const Subscription = (event) => {
    if (event.target.value) {
      setstate(event.target.value);
      // Getdatacity(state)
      Getdatacity(event.target.value);
    }
  };
  const Subscriptioncity = (event) => {
    if (event.target.value) {
      setcity(event.target.value);
    }
  };
  const imagefirst = (event) => {
    setupload1(event.target.files[0]);
  };
  const imagesecond = (event) => {
    setupload2(event.target.files[0]);
  };
  console.log(email);

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    const numericValue = input.replace(/\D/g, ''); // Remove non-digit characters

    // Restrict to 10 digits
    const formattedNumber = numericValue.slice(0, 10);

    setphone(formattedNumber);
  };

  return (
    <>
      <Toaster />
      <div className="">
        <Container fluid>
          <Row>
            <Col lg={6} className="mainForm-bg">
              <div className="mainForm-text">
                <h2>VEEJAY JEWELLER'S</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and
                </p>
                <div className="btn-section">
                  <Link to="/login" className="btn-theme-2">
                    Login
                  </Link>
                  {/* <Link to="/signUp-user" className="btn-theme-2">
                    SignUp User
                  </Link> */}
                  <Link to="/signUp-wholesaler" className="btn-theme-3">
                    SignUp Wholesaler
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mainForm-content">
                <h3>Welcome!</h3>
                <h4>Create Wholesaler Account</h4>
                <div className="form-card">
                  {step === 1 && (
                    <div className="stepform">
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>
                            First Name<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            value={f_name}
                            onChange={(e) => setf_name(e.target.value)}
                          />
                          {error && f_name.length <= 0 ? (
                            <span className="validationErr">
                              First name is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>
                            Last Name<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            value={l_name}
                            onChange={(e) => setl_name(e.target.value)}
                          />
                          {error && l_name.length <= 0 ? (
                            <span className="validationErr">
                              Last name is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>
                            Mobile Number<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter mobile number"
                            value={phone}
                            onChange={handlePhoneNumberChange}
                            onInput={(e) => setphone(e.target.value)}
                          />
                          {error && phone.length <= 0 ? (
                            <span className="validationErr">
                              Phone number is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>
                            Email<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter email"
                            autoComplete="new-email"
                            value={email}
                            onChange={handleChangeEmail}
                            // {/* onChange={(e) => setemail(e.target.value)} */}
                          />
                          {error && email.length <= 0 ? (
                            <span className="validationErr">
                              Email is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>
                            Password <span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="password"
                            autoComplete="new-password"
                            placeholder="Enter set password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                          />
                          {error && password.length <= 0 ? (
                            <span className="validationErr">
                              Set password is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>
                            Confirm Password
                            <span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="password"
                            autoComplete="new-password"
                            placeholder="Enter confirm password"
                            value={confirmpassword}
                            onChange={(e) => setconfirmpassword(e.target.value)}
                          />
                          {error && password.length <= 0 ? (
                            <span className="validationErr">
                              Confirm password is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </Row>
                      <div className="mainForm-btn">
                        <Button onClick={nextStep}>Next</Button>
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="stepform">
                      {/* <h2>Step 2 : Documents</h2> */}
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>
                            Company Name<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter company name"
                            value={company_name}
                            onChange={(e) => setcompany_name(e.target.value)}
                          />
                          {error && company_name.length <= 0 ? (
                            <span className="validationErr">
                              Company name is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>
                            Date Formulation
                            <span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Enter date formulation"
                            value={foundation_date}
                            onChange={(e) => setfoundation_date(e.target.value)}
                          />
                          {error && foundation_date.length <= 0 ? (
                            <span className="validationErr">
                              Date Formulation is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>
                            State<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            onChange={Subscription}
                            value={state}
                          >
                            <option>Choose...</option>
                            {stateall.map((items) => (
                              <option value={items.id} key={items.id}>
                                {items.state_name}
                              </option>
                            ))}
                          </Form.Select>
                          {error && state.length <= 0 ? (
                            <span className="validationErr">
                              State is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>
                            City<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            onChange={Subscriptioncity}
                            value={city}
                          >
                            <option>Choose...</option>
                            {stateallCity.map((items) => (
                              <option>{items.city_name}</option>
                            ))}
                          </Form.Select>
                          {error && city.length <= 0 ? (
                            <span className="validationErr">
                              City is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>
                            Pincode <span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter pincode"
                            value={pincode}
                            onChange={(e) => setpincode(e.target.value)}
                          />
                          {error && pincode.length <= 0 ? (
                            <span className="validationErr">
                              Pincode is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>
                            GST Number<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter gst number"
                            value={gst_number}
                            onChange={(e) => setgst_number(e.target.value)}
                          />
                          {error && gst_number.length <= 0 ? (
                            <span className="validationErr">
                              GST number is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>
                            Upload 1<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            placeholder="Enter company name"
                            onChange={imagefirst}
                          />
                          {error && upload1.length <= 0 ? (
                            <span className="validationErr">
                              Upload File is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>
                            Upload 2<span style={{ color: "red" }}>*</span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            placeholder="Enter date formulation"
                            onChange={imagesecond}
                          />
                          {error && upload2.length <= 0 ? (
                            <span className="validationErr">
                              Upload File is required.
                            </span>
                          ) : (
                            ""
                          )}
                        </Form.Group>
                      </Row>
                      <div className="mainForm-btn">
                        <Button
                          style={{ width: "180px", margin: "4px" }}
                          onClick={prevStep}
                        >
                          Previous
                        </Button>
                        <Button
                          style={{ width: "180px", margin: "4px" }}
                          type="submit"
                          onClick={handlewholesales}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignupWholesaler;
