import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Header from "../../directives/header";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../directives/footer";


function Favouriteproduct() {
  const loginId = localStorage.getItem("id");
  const [wishlistData, setWishlistData] = useState([]);
  const [wishlistDatatwo, setWishlistDatatwo] = useState([]);

  useEffect(() => {
    fetchWishlistData();
  }, []);

  const fetchWishlistData = async () => {
    try {
      const response = await axios.get(`https://veejayjewels.com/api/v1/customer/wish-list/wishlist/${loginId}`);
      setWishlistData(response.data.product);
      setWishlistDatatwo(response.data.wishlist);
    } catch (error) {
      console.error('Error fetching wishlist data:', error);
    }
  };


  const handleRemoveFromWishlist = async (id) => {
    try {
      await axios.delete(`https://veejayjewels.com/api/v1/customer/wish-list/remove-wishlist/${id}`)
      .then((response) => {
        fetchWishlistData()
      })
      setWishlistDatatwo((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
      if (error.response) {
        console.log('Response status:', error.response.status);
        console.log('Response data:', error.response.data);
      }
    }
  };

  console.log("wishlistDatawishlistData", wishlistDatatwo);

  return (
    <>
      <Header />
      <section className='section-padding'>
        <Container>
          <div className="New-Products-head">
            <h5>Favourite List Product</h5>
          </div>

          <Row className="mt-4 mb-4">
            {wishlistData.map((productArray, index) => (
              // Check if the productArray is not empty
              // and render the product details if available
              productArray.length > 0 ? (
                <Col key={index} lg={3} sm={4} xs={6} className="mb-4">
                  <div className="mainProductcard">
                    {/* Render the product information */}
                    {/* {wishlistDatatwo.map((items) => ( */}
                      <div className="like-icon">
                        <i className="fa fa-trash" onClick={() => handleRemoveFromWishlist(wishlistDatatwo[0].id)} />
                      </div>
                    {/* ))} */}

                    <img src={productArray[0].image[0]} />
                    {/* alt={productArray[0].name} */}
                    <h4>{productArray[0].name}</h4>
                    <p>
                      {productArray[0].unit_value} gm
                    </p>
                    <span>Karat : {productArray[0].purity}</span><br />
                    <span>Design Num : {productArray[0].design}</span>
                    <div className="product-btnarea">
                      <Link to={`/product-details/${productArray[0].id}`} className="product-addBtn">
                        View Products
                      </Link>
                    </div>
                  </div>
                </Col>
              ) : null
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Favouriteproduct;
