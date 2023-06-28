import { useState, useEffect } from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from "../../Constant/Index";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(null);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setpincode] = useState("");
  const [stateallCity, setStateallCity] = useState([]);
  const [stateall, setStateall] = useState([]);
  const [uploadImage, setUploadImage] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [imageProfile, setImageProfile] = useState("");
  const storedId = localStorage.getItem("id");
  const navigate = useNavigate();

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
        setStateall(data.state);
        // console.log("respostate", data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("ERROR FOUND---->>>>" + error);
    }
  };

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
        setId(response.data.id);
        setFirstName(response.data.f_name);
        setLastName(response.data.l_name);
        setpincode(response.data.pincode);
        setEmail(response.data.email);
        setState(response.data.state);
        setPhone(response.data.phone);
        setCity(response.data.city);

        const imageUrl = `https://veejayjewels.com/public/${response.data.image}`;
        setUploadImage(imageUrl);
        setShowPreview(true);
        // setStateall(Response.state);
        console.error("ERROR FOUND---->>>>", imageUrl);
      })
      .catch((error) => {
        console.error("ERROR FOUND---->>>>" + error);
      });
  };
  // console.error("ERROR FOUND---->>>>", uploadImage);

  const updateProfileData = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("f_name", firstName);
    formData.append("l_name", lastName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("image", uploadImage);
    formData.append("id", storedId);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("pincode", pincode);

    axios
      .post(`${BASE_URL}/customer/update-profile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        // withCredentials: true,
      })
      .then((response) => {
        setImageProfile(response.data.data.image);
        toast.success("Successfuly Updated");
      })

      .catch((error) => {
        // console.log(error.response.data);
      });
  };

  const handleUploadImage = (event) => {
    setShowPreview(false);
    setUploadImage(event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSelectChange = (e) => {
    setState(e.target.value);
    Getdatacity(e.target.value);
  };

  const Getdatacity = (state) => {
    const formData = new FormData();
    formData.append("state", state);

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
    setCity(event.target.value);
  };

  useEffect(() => {
    getDataAll();
    EditProfile();
    if (city) {
      Getdatacity(city);
    }
  }, []);

  const handleLogouot = () => {
    localStorage.removeItem("id");
  };
  useEffect(() => {
    if (!storedId) {
      navigate("/login");
    }
    // GetdataAll();
  });

  return (
    <>
      <Toaster />
      <Header profileImage={imageProfile} />

      <section className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={9}>
              <h4 className="main-heading text-center">Profile</h4>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={10}>
              <div className="contact-form">
                {/* <h2>Ready to Get Started?</h2>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p> */}
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter full name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter full name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>State</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={handleSelectChange}
                      value={state}
                    >
                      <option>Choose...</option>
                      {stateall.map((items) => (
                        <option value={items.id} key={items.id}>
                          {items.state_name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>City</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={Subscriptioncity}
                      value={city}
                    >
                      <option>Choose...</option>
                      {stateallCity &&
                        stateallCity.map((items) => (
                          <option value={items.id} key={items.id}>
                            {items.city_name}
                          </option>
                        ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter pincode"
                      value={pincode}
                      onChange={(e) => setpincode(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Profile Upload </Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="file upload"
                      onChange={handleUploadImage}
                    />
                  </Form.Group>
                  <img
                    src={showPreview ? uploadImage : selectedImage}
                    alt="file"
                  ></img>

                  <div className="mainForm-btn">
                    <Button type="submit" onClick={updateProfileData}>
                      Profile Update
                    </Button>
                  </div>
                  <div className="mainForm-btn">
                    <Button type="submit" onClick={handleLogouot}>
                      Logout
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Profile;
