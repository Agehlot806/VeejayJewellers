import React, { useEffect, useState } from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import bangle1 from "../../assets/images/img/bangle1.png";
import product2 from "../../assets/images/img/product2.png";
import bangle3 from "../../assets/images/img/bangle3.png";
import bangle2 from "../../assets/images/img/bangle2.png";
import bangle4 from "../../assets/images/img/bangle4.png";
import chain1 from "../../assets/images/img/chain1.png";
import chain2 from "../../assets/images/img/chain2.png";
import product3 from "../../assets/images/img/product3.png";
import ring1 from "../../assets/images/img/ring1.png";
import ring2 from "../../assets/images/img/ring2.png";
import ring3 from "../../assets/images/img/ring3.png";
import ring4 from "../../assets/images/img/ring4.png";
import product5 from "../../assets/images/img/product5.png";
import { BASE_URL } from "../../Constant/Index";
import bannertwo from '../../assets/images/banner/image 12.png'

function Allproduct() {
    const [allproduct, setallproduct] = useState([]);

    const cleanImageUrl = (imageUrl) => {
        // Remove square brackets and escape characters
        return imageUrl.replace(/[\[\]\\"]/g, "");
    };

    useEffect(() => {
        allProduct();
    }, []);

    const allProduct = () => {
        axios
            .get(`${BASE_URL}/products/latest`)
            .then((response) => {
                console.log(response.data);
                setallproduct(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    return (
        <>
            <Header />
            <div className='allPage-bgtwo'>
                <Container fluid className='p-0'>
                    <img src={bannertwo} />
                </Container>
            </div>
            <section className="section-padding">
                <Container>
                    <Row>
                        {allproduct.map((item) => (
                            <Col lg={3} xs={6} className="mt-4 mb-5">
                                <div className="bestseller-card">
                                    <div className="bestseller-cardImg">
                                        <img src={"https://veejayjewels.com/storage/app/public/product/" + item.single_img} alt="" />
                                    </div>
                                </div>
                                <div className="bestseller-cardText">
                                    <h5>{item.name}</h5>
                                    <p>{item.unit_value} {item.unit}</p>
                                    <span>Karat : {item.purity}</span>
                                    <div className="product-btnarea">
                                        <Link to={`/product-details/${item.id}`} className="product-addBtn">
                                            Add To Cart
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
}

export default Allproduct;
