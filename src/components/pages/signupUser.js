import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../../Constant/Index";

function SignupUser() {
  const [f_name, setf_name] = useState("");
  const [l_name, setl_name] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [role, setrole] = useState(null);
  const [temporary_token, settemporary_token] = useState(null);
  const [company_name, setcompany_name] = useState(null);
  const [foundation_date, setfoundation_date] = useState(null);
  const [country, setcountry] = useState(null);
  const [state, setstate] = useState(null);
  const [city, setcity] = useState(null);
  const [pincode, setpincode] = useState(null);
  const [gst_number, setgst_number] = useState(null);
  const [upload1, setupload1] = useState(null);
  const [upload2, setupload2] = useState(null);
  const [error, seterror] = useState(false);

  const handleSignUser = async (e) => {
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: "OjsvX5yp2xmOVHsUnhwSOpdWdEetlflRzQcXAFnZ",
    };
    await fetch(`${BASE_URL}/auth/registration`, {
      method: "POST",

      body: JSON.stringify({
        f_name: f_name,
        l_name: l_name,
        phone: phone,
        email: email,
        password: password,
        password: confirmpassword,
        role: "user",
        temporary_token: temporary_token,
        company_name: company_name,
        foundation_date: foundation_date,
        country: country,
        state: state,
        city: city,
        pincode: pincode,
        gst_number: gst_number,
        upload1: upload1,
        upload2: upload2,
      }),
      headers: headers,
    })
      .then((Response) => Response.json())
      .then((Response) => {
        if (Response.message == "Registration Successfull") {
          toast.success("Registration Successfull");
        }
        if (
          f_name.length == 0 ||
          l_name.length == 0 ||
          phone.length == 0 ||
          email.length == 0 ||
          password.length == 0
        ) {
          seterror(true);
        }
      })
      .catch((error) => {
        console.error("ERROR FOUND---->>>>" + error);
      });
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
                  <Link to="/signUp-user" className="btn-theme-3">
                    SignUp User
                  </Link>
                  <Link to="/signUp-wholesaler" className="btn-theme-2">
                    SignUp Wholesaler
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mainForm-content">
                <h3>Welcome!</h3>
                <h4>Create Account</h4>
                <div>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>First Name</Form.Label>
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
                      <Form.Label>Last Name</Form.Label>
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
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter mobile number"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
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
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
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
                      <Form.Label>Set Password</Form.Label>
                      <Form.Control
                        type="password"
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
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
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
                    <Button type="submit" onClick={handleSignUser}>
                      Create Account
                    </Button>
                  </div>

                  <p>
                    Already a member? <Link to="/login">Login here</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignupUser;
