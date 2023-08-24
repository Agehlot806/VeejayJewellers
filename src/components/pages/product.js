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
  console.log("allproduct", allproduct);
  const [thirdbanner, setthirdbanner] = useState([]);
  const [activeCategory, setActiveCategory] = useState(name);
  const [wishlistData, setWishlistData] = useState([]);
  const loginId = localStorage.getItem("id");
  const pageSize = 24;
  // const [brandcategories, setBrandCategories] = useState([]);
  const [paginatedCategories, setPaginatedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategory] = useState([]);
  const [isFavCheck, setisFavCheck] = useState(false);
  const [dataList, setDataList] = useState([]);

  //   const [activeCategory, setActiveCategory] = useState(name);

  useEffect(() => {
    if (
      activeCategory == "AllProduct" ||
      typeof activeCategory == "undefined"
    ) {
      allProduct();
    } else {
      handleDataList(activeCategory);
    }
    categorys();
    thirdBanner();
  }, [activeCategory]);

  useEffect(() => {
    // Update the paginated categories whenever brandcategories or currentPage changes
    pagination(currentPage);
  }, [allproduct, currentPage]);

  useEffect(() => {
    if (allproduct.length > 0) {
      handleWishlist();
    }

    return () => {
      setisFavCheck(false);
    };
  }, [isFavCheck]);

  const [error, setError] = useState([]);
  const categorys = () => {
    axios
      .get(`${BASE_URL}/categories/all_childes/${loginId}`)
      .then((response) => {
        setbrandcategories(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const allProduct = () => {
    axios
      .get(`${BASE_URL}/products/latest`)
      .then((response) => {
        // console.log(response.data);
        setallproduct(response.data.data);
        fetchWishlistData();
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  };
  const fetchWishlistData = async () => {
    try {
      await axios
        .get(`${BASE_URL}/customer/wish-list/wishlist/${loginId}`)
        .then((response) => {
          console.log("response in whisList", response);
          setWishlistData(response.data.wishlist);
          setisFavCheck(true);
          // handleWishlist();
        });
    } catch (error) {
      console.error("Error fetching wishlist data:", error);
    }
  };
  const handleWishlist = () => {
    let newArr = [...allproduct];
    let newArr1 = [...dataList];
    let filterData = [];
    if (activeCategory == "AllProduct") {
      filterData = allproduct.filter((el) => {
        return wishlistData.some((ele) => {
          return ele.product_id === el.id;
        });
      });
    } else {
      filterData = dataList.filter((el) => {
        return wishlistData.some((ele) => {
          return ele.product_id === el.id;
        });
      });
    }

    if (filterData.length > 0) {
      for (let index = 0; index < filterData.length; index++) {
        const element = filterData[index];
        const indexData = allproduct.map((ele) => ele.id).indexOf(element.id);
        console.log("indexData", indexData);
        if (activeCategory == "AllProduct") {
          newArr[indexData].isFav = true;
          setallproduct(newArr);
        } else {
          newArr1[indexData].isFav = true;
          setDataList(newArr1);
        }
      }
    }
    console.log("filterData", filterData);
    console.log("newArr", newArr);
  };
  const cleanImageUrl = (imageUrl) => {
    // Remove square brackets and escape characters
    return imageUrl?.replace(/[\[\]\\"]/g, "");
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
  const [filter, setFilter] = useState(false);
  const handleDataList = async (name) => {
    console.log("handleDataList ======= Callled", name);
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
      const filteredData = nestedData.filter((item) => item.category === name);
      setDataList(filteredData);
      setFilter(true);

      const categoryNames = filteredData.map((item) => item.category);
      setCategory(categoryNames);
      setisFavCheck(true);
    } catch (error) {
      // console.log("Errorr", error);
    }
  };

  // useEffect(() => {
  //   arhaProduct();
  // }, []);

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
    setimage(thumnail);
    settitle(title);
    setfile(file);
  };

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
      .post(
        `https://veejayjewels.com/api/v1/customer/wish-list/add-to-wishlist`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((response) => {
        console.log("response143", response);
        if (response.data.message) {
          toast.success(response.data.message);
          let newArr = [...allproduct];
          const index = allproduct.map((el) => el.id).indexOf(product_id);
          newArr[index].isFav = true;
          setallproduct(newArr);
        }
      })
      .catch((error) => {
        toast.error("Already in your wishlist");
      });
  };

  const [products, setProducts] = useState([]);
  console.log("products", products);
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
        console.log("allData", allData);
        // Combine all data into a single array
        const combinedData = allData.reduce(
          (acc, data) => [...acc, ...data],
          []
        );

        // console.log('combinedData',combinedData)

        setallproduct(combinedData);
      setisFavCheck(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (selectedPurity.length > 0) {
      fetchData();
    } else {
      console.log("allProduct api in purity ELSE");
      if (activeCategory == "AllProduct") {
        allProduct();
      }
    }
    console.log("selectedPurity", selectedPurity);
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
  };
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
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey={activeCategory}
          >
            <Row className="mt-4">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column brand-cate-list">
                  <div className="tabBrands">
                    <h3>Category</h3>
                    <Nav.Item
                    //  onClick={fieldpagerefresh}
                    >
                      <Nav.Link
                        eventKey="AllProduct"
                        onClick={() => {
                          // allProduct()
                          setActiveCategory("AllProduct");
                          setData("AllProduct");
                        }}
                        active={activeCategory === "AllProduct"}
                      >
                        All Product
                      </Nav.Link>
                    </Nav.Item>
                    {brandcategories.length > 0
                      ? brandcategories.map((item, index) => (
                          <Nav.Item key={index}>
                            <Nav.Link
                              eventKey={item.name}
                              onClick={() => {
                                setActiveCategory(item.name);
                                setData(item.name);
                                // handleDataList(item.name)
                              }}
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
                    <div className="checkbox-bg">
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
                  <Tab.Pane eventKey={activeCategory}>
                    <Row>
                      {/* {products.map((item) => (
                        <Col
                          lg={4}
                          sm={4}
                          xs={6}
                          className="mb-4"
                          key={item.id}
                        >
                          <div className="mainProductcard" key={item.id}>
                            <div className="like-icon">
                              <i
                                class="fa fa-heart-o"
                                onClick={(id) => {
                                  if (loginId == null) {
                                    toast.error("Please Login first");
                                  } else {
                                    addToWishlist(item.id);
                                  }
                                }}
                              />
                            </div>
                            <img src={cleanImageUrl(item.image)} />
                            <h4>{item.name}</h4>
                            <p>
                              {item.unit_value} {item.unit}
                            </p>
                            <span>Karat : {item.purity}</span>
                            <br />
                            <span>Design Num : {item.design}</span>
                            <div className="product-btnarea">
                              <Link
                                to={`/product-details/${item.id}`}
                                className="product-addBtn"
                              >
                                View Products
                              </Link>
                            </div>
                          </div>
                        </Col>
                      ))} */}
                      {/* {products.length === 0 && <p>Product is not available.</p>} */}

                      {activeCategory == "AllProduct" ? (
                        paginatedCategories.map((item) => (
                          <Col
                            lg={4}
                            sm={4}
                            xs={6}
                            className="mb-4"
                            key={item.id}
                          >
                            <div className="mainProductcard">
                              <div className="like-icon">
                                <i
                                  class={
                                    item.isFav ? "fa fa-heart" : "fa fa-heart-o"
                                  }
                                  onClick={(id) => {
                                    if (loginId == null) {
                                      toast.error("Please Login first");
                                    } else {
                                      addToWishlist(item.id);
                                    }
                                  }}
                                />
                              </div>
                              <img src={cleanImageUrl(item.image)} />
                              <h4>{item.name}</h4>
                              <p>
                                {item.unit_value} {item.unit}
                              </p>
                              <span>Karat : {item.purity}</span>
                              <br />
                              <span>Design Num : {item.design}</span>
                              <div className="product-btnarea">
                                <Link
                                  to={`/product-details/${item.id}`}
                                  className="product-addBtn"
                                >
                                  View Products
                                </Link>
                              </div>
                            </div>
                          </Col>
                        ))
                      ) : (
                        <Row>
                          <div className="brands-tabs-all">
                            {/* <ul
                              className="nav nav-pills mb-3"
                              id="pills-tab"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  className="nav-link active"
                                  id="AllProduct-tab"
                                  data-toggle="pill"
                                  href="#AllProduct"
                                  role="tab"
                                  aria-controls="AllProduct"
                                  aria-selected="true"
                                  eventKey="AllProduct"
                                  onClick={() => {
                                    // allProduct()
                                    setActiveCategory("AllProduct");
                                    setData("AllProduct");
                                  }}
                                >
                                  All Products
                                </a>
                              </li>
                              {filter && dataList.length > 0
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
                            </ul> */}
                            <div className="tab-content" id="pills-tabContent">
                              <div
                                className="tab-pane fade show active"
                                id="arhaallproduct"
                                role="tabpanel"
                                aria-labelledby="arhaallproduct-tab"
                              >
                                <Row>
                                  {filter && dataList.length > 0 ? (
                                    dataList.map((item) => (
                                      <Col
                                        lg={4}
                                        className="mb-4"
                                        key={item.id}
                                      >
                                        <div className="mainProductcard">
                                          <div className="like-icon">
                                            <i
                                              class={
                                                item.isFav ? "fa fa-heart" : "fa fa-heart-o"
                                              }
                                              onClick={(id) => {
                                                if (loginId == null) {
                                                  toast.error(
                                                    "Please Login first"
                                                  );
                                                } else {
                                                  addToWishlist(item.id);
                                                }
                                              }}
                                            />
                                          </div>
                                          <img
                                            src={cleanImageUrl(item.image)}
                                            alt={item.name}
                                          />
                                          <h4>{item.name}</h4>
                                          <p>
                                            {item.unit_value} {item.unit}
                                          </p>
                                          <span>Karat : {item.purity}</span>
                                          <br />
                                          <span>
                                            Design Num : {item.design}
                                          </span>
                                          <div className="product-btnarea">
                                            <Link
                                              to={`/product-details/${item.id}`}
                                              className="product-addBtn"
                                            >
                                              View Products
                                            </Link>
                                          </div>
                                        </div>
                                      </Col>
                                    ))
                                  ) : (
                                    <div>No data available.</div>
                                  )}
                                </Row>
                              </div>
                            </div>
                          </div>
                        </Row>
                      )}
                    </Row>
                    {/* <Row>
                    </Row> */}
                    {/* Pagination number show */}
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
                  {/* <Tab.Pane eventKey={data}>
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
                          {filter && dataList.length > 0
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
                              {filter && dataList.length > 0 ? (
                                dataList.map((item) => (
                                  <Col lg={4} className="mb-4" key={item.id}>
                                    <div className="mainProductcard">
                                      <div className="like-icon">
                                        <i
                                          class="fa fa-heart-o"
                                          onClick={(id) => {
                                            if (loginId == null) {
                                              toast.error("Please Login first");
                                            } else {
                                              addToWishlist(item.id);
                                            }
                                          }}
                                        />
                                      </div>
                                      <img
                                        src={cleanImageUrl(item.image)}
                                        alt={item.name}
                                      />
                                      <h4>{item.name}</h4>
                                      <p>
                                        {item.unit_value} {item.unit}
                                      </p>
                                      <span>Karat : {item.purity}</span>
                                      <br />
                                      <span>Design Num : {item.design}</span>
                                      <div className="product-btnarea">
                                        <Link
                                          to={`/product-details/${item.id}`}
                                          className="product-addBtn"
                                        >
                                          View Products
                                        </Link>
                                      </div>
                                    </div>
                                  </Col>
                                ))
                              ) : (
                                <div>No data available.</div>
                              )}
                            </Row>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </Tab.Pane> */}
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
