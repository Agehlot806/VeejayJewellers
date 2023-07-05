import React from 'react'
import Header from '../../directives/header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ring2 from '../../assets/images/img/ring2.png'
import Footer from '../../directives/footer'
import { Link, useParams } from 'react-router-dom'
import border from '../../assets/images/banner/border.png'
import { BASE_URL } from '../../Constant/Index'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
function Addcart() {
    useEffect(() => {
        latestsapidata()
    })
    const cardaddnavigate = useParams()
    const loginId = localStorage.getItem("id");
    const state = localStorage.getItem("state");
    const city = localStorage.getItem("city");
    const pincode = localStorage.getItem("pincode");
    // console.log("state",state,"city",city,"pincode",pincode,"loginId",loginId);
    const [carddata, setCardData] = useState()
    const [variantdata, setvariantdata] = useState()
    const latestsapidata = () => {
        axios
            .get(`${BASE_URL}/products/card`)
            .then((response) => {
                console.log(response.data);
                setCardData(response.data.data);
                setvariantdata(response.data.data.variant)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    console.error("Error fetching data:", variantdata);
    const deleteDataById = (id) => {
        console.log("ididididiidd", id);
        axios
            .post(`${BASE_URL}/products/discard?id=${id}`)
            .then((response) => {
                console.log(response);
                console.log("Delete Successful");
                // Perform any additional actions after successful deletion
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handlePlaceOrder = () => {
        const cartData = carddata.map((item) => {
            const variants = item.variant && JSON.parse(item.variant);
            const mappedVariants = variants.map((variant) => ({
              quantity: variant.quantity,
              variantion: variant.variant,
            }));
            return {
              product_id: item.product_id,
              ...(variants && variants.length > 0 && { variants: mappedVariants }),
            };
          });
        const deliveryAddress =`${state},${city},${pincode}`
        console.log("deliveryAddressdeliveryAddress", deliveryAddress);
        const orderData = {
            user_id: loginId,
            delivery_address: deliveryAddress,
            cart: cartData,
        };
        axios
            .post("https://veejayjewels.com/api/v1/products/place", orderData)
            .then((response) => {
                console.log(response);
                // Handle success response
                cardaddnavigate("/check-invoice")
            })
            .catch((error) => {
                console.log(error);
                // Handle error
            });
    };
    return (
        <>
            <Header />
            <section className="section-padding">
                <Container>
                    {carddata ? (
                        carddata.map((item, index) => (
                            <div className='add-card-AREA' key={index}>
                                <Row className="justify-content-center mb-3">
                                    <Col lg={3} xs={3}>
                                        <div className='add-cart'>
                                            <img src={item.image} alt={item.product_name} />
                                        </div>
                                    </Col>
                                    <Col lg={6} xs={6}>
                                        <div className='add-cart-content'>
                                            <h2>{item.product_name}</h2>
                                            {/* {item.variant && JSON.parse(item.variant).map((variant, variantIndex) => (
                                                <p key={variantIndex}>
                                                    Variant: {variant.variant}
                                                    <span>Quantity: {variant.quantity}</span>
                                                </p>
                                            ))} */}
                                        </div>
                                    </Col>
                                    <Col lg={3} xs={3} className='align-self-end'>
                                        <div className='text-center'>
                                            <button onClick={(e) => deleteDataById(item.id)} className="showSize">Remove</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))
                    ) : null}
                </Container>
                <div className='text-center mt-3'>
                    <Link className="showSize" onClick={handlePlaceOrder}>
                        Submit
                    </Link>
                </div>
            </section >
            <Footer />
        </>
    )
}
export default Addcart

