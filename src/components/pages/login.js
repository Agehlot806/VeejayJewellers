import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import logo from '../../assets/images/logo/logo.png'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

function Login() {
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');

  const handleLogin = async (e) => {
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      
  };
  await fetch(`https://veejayjewels.com/api/v1/auth/login`, {
      method: 'POST',
     
      body: JSON.stringify({
          password: password,
          phone: phone,
      }),
      headers: headers,
  })
      .then((Response) => Response.json())
      .then((Response) => {
      
          if (Response.message  == 'Login Successfull') {
            toast.success("Login Successfull")
          }
          if (Response.errors[0].message == "Invalid credential.") {
              toast.error("Invalid credential")
          }
      })
      .catch((error) => {
          console.error("ERROR FOUND---->>>>" + error);
      })
  };

  return (
    <>
    <Toaster />
      <div className=''>
        <Container fluid>
          <Row>
            <Col lg={6} className='mainForm-bg'>
              <div className="mainForm-text">
                <h2>VEEJAY JEWEL'S</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                <div className="btn-section">
                  <Link to="/login" className="btn-theme-3">Login</Link>
                  <Link to="/signUp-user" className="btn-theme-2">SignUp User</Link>
                  <Link to="/signUp-wholesaler" className="btn-theme-2">SignUp Wholesaler</Link>
                </div>
              </div>

            </Col>
            <Col lg={6} >
              <div className='mainForm-content'>
                <h3>Welcome!</h3>
                <h4>Sign Into Your Account</h4>
                <div>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter mobile number" 
                    value={phone}
                    onChange={(e) => setphone(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" 
                     value={password}
                     onChange={(e) => setpassword(e.target.value)}/>
                  </Form.Group>
                  <div className='mainForm-right'>
                    <Link to='/forgot-password'>Forgot your password?</Link>
                  </div>
                  <div className='mainForm-btn'>
                    <button type="submit" onClick={handleLogin}>
                      Login
                    </button>
                  </div>

                  <p>Don't have an account? <Link to="/signUp-user" class="thembo"> Register here</Link></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>


        {/* <button onClick={handleLogin}>click</button> */}
      </div >
    </>
  )
}

export default Login


