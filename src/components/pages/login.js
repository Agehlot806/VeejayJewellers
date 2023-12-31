import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constant/Index";
// import { BASE_URL } from "../../Constant/Index";

function Login() {
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (phone && password) {
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          password: password,
          phone: phone,
        }),
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data", data);
          if (data.errors && data.errors[0].message) {
            toast.error("Invalid credential");
          }
          localStorage.setItem("id", data.data[0].id);
          localStorage.setItem("name", `${data.data[0].f_name} ${data.data[0].l_name}`);
          localStorage.setItem("city", data.data[0].city);
          localStorage.setItem("pincode", data.data[0].pincode);
          localStorage.setItem("status", data.data[0].status);
          localStorage.setItem("state", data.data[0].state);
          localStorage.setItem("profileImage", data.data[0].image);
          localStorage.setItem("address", data.data[0].address);
          localStorage.setItem("phone", data.data[0].phone);
          if (data.message === "Login Successfull") {
            navigate("/");
            toast.success("Login Successful");
          }
        })
        .catch((error) => {
          console.error("ERROR FOUND---->>>>", error.data);
        });
    } else {
      toast.error("Please Enter All Field");
    }
  };
  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    const numericValue = input.replace(/\D/g, ""); // Remove non-digit characters

    // Restrict to 10 digits
    const formattedNumber = numericValue.slice(0, 10);

    setphone(formattedNumber);
  };

  // const handlepasswordDigit = (event) => {
  //   const input = event.target.value;
  //   const numericValue = input.replace(/\D/g, ''); // Remove non-digit characters

  //   // Restrict to 10 digits
  //   const formattedNumber = numericValue.slice(0, 8);

  //   setpassword(formattedNumber);
  // };

  // useEffect(() => {
  //   if (success) {
  //     // Redirect to another page
  //     history.push("/home");
  //   }
  // }, [success, history]);
  return (
    <>
      <Toaster />
      <div className="">
        <Container fluid>
          <Row>
            <Col lg={6} className="mainForm-bg">
              <div className="mainForm-text">
                <h2>VEEJAY <br />JEWEL'S</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and
                </p>
                <div className="btn-section">
                  <Link to="/login" className="btn-theme-3">
                    Login
                  </Link>
                  {/* <Link to="/signUp-user" className="btn-theme-2">
                    SignUp User
                  </Link> */}
                  <Link to="/signUp-wholesaler" className="btn-theme-2">
                    SignUp User
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mainForm-content">
                <h3>Welcome!</h3>
                <h4>Sign Into Your Account</h4>
                <div>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Mobile Number <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      autoComplete="new-number"
                      type="number"
                      placeholder="Enter mobile number"
                      value={phone}
                      onChange={handlePhoneNumberChange}
                      // maxLength={10}
                      onInput={(e) => setphone(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Password <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      autoComplete="new-password"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      // onChange={handlepasswordDigit}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className="mainForm-right">
                    <Link to="/forgot-password">Forgot your password?</Link>
                  </div>
                  <div className="mainForm-btn">
                    <button type="submit" onClick={handleLogin}>
                      Login
                    </button>
                  </div>

                  <p>
                    Don't have an account?{" "}
                    <Link to="/signUp-wholesaler" class="thembo">
                      {" "}
                      Signup User here
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* <button onClick={handleLogin}>click</button> */}
      </div>
    </>
  );
}

export default Login;
