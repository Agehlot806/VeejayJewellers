import React, { useEffect, useState } from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import { Container, Row, Col, Nav, Tab, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Constant/Index";
import bannertwo from "../../assets/images/banner/image 12.png";
import image14 from "../../assets/images/banner/image 14.png";
import image15 from "../../assets/images/banner/image 15.png";
// import ApiHelper from '../utils/ApiHelper';
import Carousel from "react-multi-carousel";
import _ from "lodash";
import toast, { Toaster } from "react-hot-toast";

const clinetreview = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function Product(props) {
  const { name } = useParams();
  const [brandcategories, setbrandcategories] = useState([]);
  const [allproduct, setallproduct] = useState([]);
  const [thirdbanner, setthirdbanner] = useState([]);
  const [activeCategory, setActiveCategory] = useState(name);
  console.log('====================================', activeCategory);
  const loginId = localStorage.getItem("id");
  const pageSize = 24;
  // const [brandcategories, setBrandCategories] = useState([]);
  const [paginatedCategories, setPaginatedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategory] = useState([]);
  //   const [activeCategory, setActiveCategory] = useState(name);
  // console.log('====================================',activeCategory);
  // console.log();
  // console.log('====================================');

  useEffect(() => {
    categorys();
    allProduct();
    thirdBanner();
  }, []);

  useEffect(() => {
    // Update the paginated categories whenever brandcategories or currentPage changes
    pagination(currentPage);
  }, [allproduct, currentPage]);

  const [error, setError] = useState([]);
  const categorys = () => {
    axios
      .get(`${BASE_URL}/categories`)
      .then((response) => {
        setbrandcategories(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const cleanImageUrl = (imageUrl) => {
    // Remove square brackets and escape characters
    return imageUrl.replace(/[\[\]\\"]/g, "");
  };
  const allProduct = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        // console.log(response.data);
        setallproduct(response.data.data);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  };

  const allProductreverse = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        // Reverse the array obtained from the API response
        const reversedData = response.data.data.reverse();
        setallproduct(reversedData);
      })
      .catch((error) => {
        // Handle errors if needed
        // console.error("Error fetching data:", error);
      });
  };


  const thirdBanner = () => {
    axios
      .get(`${BASE_URL}/banners1`)
      .then((response) => {
        // console.log(response.data.data);
        setthirdbanner(response.data.data);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  };
  const [value, setValue] = useState(50);
  const handleRangeChange = (event) => {
    setValue(event.target.value);
  };
  const [data, setData] = useState(true);
  const [dataList, setDataList] = useState([]);
  const [filter, setFilter] = useState(false);

  const handleDataList = async (name) => {
    setActiveCategory(name);
    // console.log(name);
    setData(name);
    try {
      const response = await fetch(
        "https://veejayjewels.com/api/v1/products/latest"
      );
      const jsonData = await response.json();
      // Access nested data
      const nestedData = jsonData.data;
      // Filter the nested data based on brand
      const filteredData = nestedData.filter((item) => item.brand === name);
      setDataList(filteredData);
      setFilter(true);


      const categoryNames = filteredData.map((item) => item.category);
      setCategory(categoryNames);
    } catch (error) {
      // console.log("Errorr", error);
    }
  };

  useEffect(() => {
    arhaProduct();
  }, []);

  const [arhadata, setarhadata] = useState([]);
  const arhaProduct = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        // console.log(response.data.data);
        setarhadata(response.data.data);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  };
  const [image, setimage] = useState("");
  const [file, setfile] = useState("");
  const [title, settitle] = useState("");
  const [check, setCheck] = useState();
  const [filterdata, setfilterdata] = useState([]);

  const SubCategory = (thumnail, title, file) => {
    // console.log("categoery", thumnail, title);
    setimage(thumnail);
    settitle(title);
    setfile(file);
  };

  // const handleCheck24 = (event) => {
  //   setCheck(event.target.value);
  //   setallproduct(allproduct.filter((item) => item.purity === "24k"));
  // };
  // // console.log("filterdatafilterdatafilterdatafilterdata", filterdata);

  // const handleCheck22 = (event) => {
  //   setCheck(event.target.value);
  //   setallproduct(
  //     allproduct.filter(
  //       (item) =>
  //         item.purity === "14k" ||
  //         item.purity === "16k" ||
  //         item.purity === "18k" ||
  //         item.purity === "20k" ||
  //         item.purity === "22k" ||
  //         item.purity === "24k"
  //     )
  //   );
  // };
  // // console.log("1010101010110", allproduct);

  // const handleCheck18 = (event) => {
  //   setCheck(event.target.value);
  //   setallproduct(
  //     allproduct.filter(
  //       (item) =>
  //         item.purity === "14k" ||
  //         item.purity === "16k" ||
  //         item.purity === "18k" ||
  //         item.purity === "20k" ||
  //         item.purity === "22k" ||
  //         item.purity === "24k"
  //     )
  //   );
  // };
  // const handleCheck14 = (event) => {
  //   setCheck(event.target.value);
  //   setallproduct(
  //     allproduct.filter(
  //       (item) =>
  //         item.purity === "14k" ||
  //         item.purity === "16k" ||
  //         item.purity === "18k" ||
  //         item.purity === "20k" ||
  //         item.purity === "22k" ||
  //         item.purity === "24k"
  //     )
  //   );
  // };
  // const handleCheck20 = (event) => {
  //   setCheck(event.target.value);
  //   setallproduct(
  //     allproduct.filter(
  //       (item) =>
  //         item.purity === "14k" ||
  //         item.purity === "16k" ||
  //         item.purity === "18k" ||
  //         item.purity === "20k" ||
  //         item.purity === "22k" ||
  //         item.purity === "24k"
  //     )
  //   );
  // };
  // const handleCheck16 = (event) => {
  //   setCheck(event.target.value);
  //   setallproduct(
  //     allproduct.filter(
  //       (item) =>
  //         item.purity === "14k" ||
  //         item.purity === "16k" ||
  //         item.purity === "18k" ||
  //         item.purity === "20k" ||
  //         item.purity === "22k" ||
  //         item.purity === "24k"
  //     )
  //   );
  // };

  const pageCount = allproduct ? Math.ceil(allproduct.length / pageSize) : 0;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginated = _(allproduct).slice(startIndex).take(pageSize).value();
    setPaginatedCategories(paginated);
  };

  const addToWishlist = async (product_id) => {
    const formData = new FormData();
    formData.append("id", loginId);
    formData.append("product_id", product_id);
    axios
      .post(`https://veejayjewels.com/api/v1/customer/wish-list/add-to-wishlist`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log("response143", response);
        if (response.data.message) {
          toast.success(response.data.message);

        }

      })
      .catch((error) => {
        toast.error("Already in your wishlist");
      });
  };


  const [products, setProducts] = useState([]);
  const [selectedPurity, setSelectedPurity] = useState([]); // Default to 24k as an array
  const purities = ["24k", "22k", "21k", "20k"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for each selected purity level
        const promises = selectedPurity.map(async (purity) => {
          const response = await axios.post(
            "https://veejayjewels.com/api/v1/products/product_filter",
            {
              purity: purity,
            }
          );
          return response.data.data;
        });

        // Wait for all the requests to complete
        const allData = await Promise.all(promises);

        // Combine all data into a single array
        const combinedData = allData.reduce((acc, data) => [...acc, ...data], []);

        setProducts(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedPurity]); // Run this effect whenever the selectedPurity state changes

  const handlePurityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedPurity([...selectedPurity, value]); // Add the selected purity
    } else {
      setSelectedPurity(selectedPurity.filter((purity) => purity !== value)); // Remove the selected purity
    }
  };


  const fieldpagerefresh = () => {
    window.location.reload(false);
  }
  return (
    <>
      <Toaster />
      <Header />
      <div className="allPage-bgtwo">
        {" "}
        <Container fluid className="p-0">
          {" "}
          <img src={bannertwo} />{" "}
        </Container>{" "}
      </div>
      <section className="section-padding">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="AllProduct">
            <Row className="mt-4">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column brand-cate-list">
                  <div className="tabBrands">
                    <h3>Brand</h3>
                    <Nav.Item onClick={fieldpagerefresh}>
                      <Nav.Link
                        eventKey="AllProduct"
                        onClick={() => handleDataList('AllProduct')}
                        active={activeCategory === 'AllProduct'}

                      >
                        All Product
                      </Nav.Link>
                    </Nav.Item>
                    {brandcategories
                      ? brandcategories.map((item, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link
                            eventKey={item.name}
                            onClick={() => handleDataList(item.name)}
                            active={activeCategory === item.name}
                          >
                            {item.name}
                          </Nav.Link>
                        </Nav.Item>
                      ))
                      : null}

                    <h3>Sort by</h3>
                    <div className="checkbox-bg">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          defaultValue="option1"
                          onClick={allProduct}
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          Latest Order
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          defaultValue="option2"
                          onChange={allProductreverse}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios2"
                        >
                          Oldest Order
                        </label>
                      </div>

                    </div>
                    <h3>Filter</h3>
                    {/* <div className="range-bg">
                      <label>Select Gold Kt</label>
                      <div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            onClick={handleCheck14}
                          />
                          <label className="form-check-label">14 Kt</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            onClick={handleCheck16}
                          />
                          <label className="form-check-label">16 Kt</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            onClick={handleCheck18}
                          />
                          <label className="form-check-label">18 Kt</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            onClick={handleCheck20}
                          />
                          <label className="form-check-label">20 Kt</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            onClick={handleCheck22}
                          />
                          <label className="form-check-label">22 Kt</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            onClick={handleCheck24}
                          />
                          <label className="form-check-label">24 Kt</label>
                        </div>
                      </div>
                      <input
                          type="range"
                          min={0}
                          max={1000000}
                          value={value}
                          onChange={handleRangeChange}
                          className='rangeinput'
                        />
                        <div className="text-center">
                          <h2>₹ {value}</h2>
                        </div>
                    </div> */}
                    <div className="checkbox-bg">
                      {/* {purities.map((purity) => (
                        <label key={purity}>
                          <input
                            type="checkbox"
                            value={purity}
                            checked={selectedPurity.includes(purity)}
                            onChange={handlePurityChange}
                          />
                          {purity}
                        </label>
                      ))} */}

                      {purities.map((purity) => (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="exampleRadios"
                          id="exampleRadios1"
                          defaultValue="option1"
                          defaultChecked
                          value={purity}
                            checked={selectedPurity.includes(purity)}
                            onChange={handlePurityChange}
                        />
                         <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          {purity}
                        </label>
                      </div>
                      ))}
                    </div>
                    {/* <div className="checkbox-bg">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          defaultValue="option1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios1"
                        >
                          14 kt
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios2"
                        >
                          16 kt
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios3"
                        >
                          18 kt
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios4"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios4"
                        >
                          20 kt
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios4"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios4"
                        >
                          22 kt
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios4"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleRadios4"
                        >
                          24 kt
                        </label>
                      </div>
                    </div> */}
                  </div>
                </Nav>
                <div className="product-banner">
                  <img src={image15} />
                </div>
                <div className="tabBrands">
                  <h3>Catalogue</h3>
                  <h5>
                    <Link to="/women">Women</Link>
                  </h5>
                  <h5>
                    <Link to="/men">Men</Link>
                  </h5>
                  <h5>
                    <Link to="/kids">Kids</Link>
                  </h5>
                </div>
                <div className="product-banner">
                  <img src={image14} />
                </div>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="AllProduct">
                    <Row>

                      {products.map((item) => (
                        <Col
                          lg={4}
                          sm={4}
                          xs={6}
                          className="mb-4"
                          key={item.id}
                        >
                          <div className="mainProductcard" key={item.id}>
                            {/* <Link to={`/product-details/${item.id}`}> */}
                            <div className="like-icon">
                              <i class="fa fa-heart-o" onClick={(id) => addToWishlist(item.id)} />
                            </div>
                            <img src={cleanImageUrl(item.image)} />
                            <h4>{item.name}</h4>
                            <p>
                              {item.unit_value} {item.unit}
                            </p>
                            <span>Karat : {item.purity}</span><br />
                            <span>Design Num : {item.design}</span>
                            <div className="product-btnarea">
                              <Link
                                to={`/product-details/${item.id}`}
                                className="product-addBtn"
                              >
                                View Products
                              </Link>

                            </div>
                            {/* </Link> */}
                          </div>
                        </Col>
                      ))}
                      {/* {products.length === 0 && <p>Product is not available.</p>} */}

                      {paginatedCategories.map((item) => (
                        <Col
                          lg={4}
                          sm={4}
                          xs={6}
                          className="mb-4"
                          key={item.id}
                        >
                          <div className="mainProductcard">
                            {/* <Link to={`/product-details/${item.id}`}> */}
                            <div className="like-icon">
                              <i class="fa fa-heart-o" onClick={(id) => addToWishlist(item.id)} />
                            </div>
                            <img src={cleanImageUrl(item.image)} />
                            <h4>{item.name}</h4>
                            <p>
                              {item.unit_value} {item.unit}
                            </p>
                            <span>Karat : {item.purity}</span><br />
                            <span>Design Num : {item.design}</span>
                            <div className="product-btnarea">
                              <Link
                                to={`/product-details/${item.id}`}
                                className="product-addBtn"
                              >
                                View Products
                              </Link>

                            </div>
                            {/* </Link> */}
                          </div>
                        </Col>
                      ))}

                      {check &&
                        filterdata.map((item) => (
                          <Col
                            lg={4}
                            sm={4}
                            xs={6}
                            className="mb-4"
                            key={item.id}
                          >
                            <div className="mainProductcard">
                              {/* <Link to={`/product-details/${item.id}`}> */}
                              <div className="like-icon">
                                <i class="fa fa-heart-o" onClick={(id) => addToWishlist(item.id)} />
                              </div>
                              <img src={cleanImageUrl(item.image)} />
                              <h4>{item.name}</h4>
                              <p>
                                {item.unit_value} {item.unit}
                              </p>
                              <span>Karat : {item.purity}</span><br />
                              <span>Design Num : {item.design}</span>
                              <div className="product-btnarea">
                                <Link
                                  to="/add-to-cart"
                                  className="product-addBtn"
                                >
                                  View Products
                                </Link>
                              </div>
                              {/* </Link> */}
                            </div>
                          </Col>
                        ))
                      }

                    </Row>
                    <nav>
                      <ul className="pagination">
                        {pages.map((page) => (
                          <li
                            key={page}
                            className={
                              page === currentPage
                                ? "page-item active"
                                : "page-item"
                            }
                          >
                            <button
                              className="page-link"
                              onClick={() => pagination(page)}
                            >
                              {page}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </Tab.Pane>
                  <Tab.Pane eventKey={data}>
                    <Row>
                      <div className="brands-tabs-all">
                        <ul
                          className="nav nav-pills mb-3"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="arhaallproduct-tab"
                              data-toggle="pill"
                              href="#arhaallproduct"
                              role="tab"
                              aria-controls="arhaallproduct"
                              aria-selected="true"
                            >
                              All Products
                            </a>
                          </li>
                          {filter && dataList
                            ? dataList.map((item) => (
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="pills-arha-tab"
                                  data-toggle="pill"
                                  href="#pills-arha"
                                  role="tab"
                                  aria-controls="pills-profile"
                                  aria-selected="false"
                                >
                                  <div
                                    onClick={(e) =>
                                      SubCategory(
                                        item.thumnail,
                                        item.title,
                                        item.file
                                      )
                                    }
                                  >
                                    {item.category}
                                  </div>
                                </a>
                              </li>
                            ))
                            : null}
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="arhaallproduct"
                            role="tabpanel"
                            aria-labelledby="arhaallproduct-tab"
                          >
                            <Row>
                              {filter && dataList.length >= 1 ? (
                                dataList.map((item) => (
                                  <Col lg={4} className="mb-4" key={item.id}>
                                    <div className="mainProductcard">
                                      {/* <Link to={`/product-details/${item.id}`}> */}
                                      <div className="like-icon">
                                        <i class="fa fa-heart-o" onClick={(id) => addToWishlist(item.id)} />
                                      </div>
                                      <img
                                        src={cleanImageUrl(item.image)}
                                        alt={item.name}
                                      />
                                      <h4>{item.name}</h4>
                                      <p>
                                        {item.unit_value} {item.unit}
                                      </p>
                                      <span>Karat : {item.purity}</span><br />
                                      <span>Design Num : {item.design}</span>
                                      <div className="product-btnarea">
                                        <Link
                                          to={`/product-details/${item.id}`}
                                          className="product-addBtn"
                                        >
                                          View Products
                                        </Link>

                                      </div>
                                      {/* </Link> */}
                                    </div>
                                  </Col>
                                ))
                              ) : (
                                <div>No data available.</div>
                              )}
                            </Row>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-arha"
                            role="tabpanel"
                            aria-labelledby="pills-arha-tab"
                          >
                            <Row>
                              {arhadata
                                ? arhadata.map(
                                  (item, index) =>
                                    item.brand === "Araha" && (
                                      <Col
                                        lg={4}
                                        className="mb-4"
                                        key={item.id}
                                      >
                                        <div className="mainProductcard">
                                          {/* <Link
                                            to={`/product-details/${item.id}`}
                                          > */}
                                          <div className="like-icon">
                                            <i class="fa fa-heart-o" onClick={(id) => addToWishlist(item.id)} />
                                          </div>
                                          <img
                                            src={cleanImageUrl(item.image)}
                                            alt={item.name}
                                          />
                                          <h4>{item.name}</h4>
                                          <p>
                                            {item.unit_value} {item.unit}
                                          </p>
                                          <span>Karat : {item.purity}</span><br />
                                          <span>Design Num : {item.design}</span>
                                          <div className="product-btnarea">
                                            <Link
                                              to="/add-to-cart"
                                              className="product-addBtn"
                                            >
                                              View Products
                                            </Link>

                                          </div>
                                          {/* </Link> */}
                                        </div>
                                      </Col>
                                    )
                                )
                                : null}
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
      <section className="">
        <Container fluid className="p-0">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={clinetreview}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {thirdbanner
              ? thirdbanner.map(
                (item, index) =>
                  item.type === "thrid" && (
                    <div key={item.id} className="homeBack-bg">
                      <img src={item.image} alt="" />
                    </div>
                  )
              )
              : null}
          </Carousel>
        </Container>
      </section>
      <Footer />
    </>
  );
}
export default Product;
