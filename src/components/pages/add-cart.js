import React from 'react'
import Header from '../../directives/header'
import { Button, Col, Row } from 'react-bootstrap'
import ring2 from '../../assets/images/img/ring2.png'
import Footer from '../../directives/footer'
import { Link } from 'react-router-dom'
import border from '../../assets/images/banner/border.png'
import { BASE_URL } from '../../Constant/Index'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
function Addcart() {
    useEffect(()=>{
        latestsapidata()
    })
const[carddata,setCardData]=useState()
const[variantdata,setvariantdata]=useState()
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
        console.log("ididididiidd",id);
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
    return (
        <>
            <Header />
            <section className="section-padding">
            {carddata ? (
                        carddata.map((item, index) => (
                <Row className="justify-content-center mb-3" key={index}>
                    <Col lg={10}>
                            <div className='add-card-AREA'>
                                <div className='add-cart'>
                                    <div>
                                        <img src={item.image} />
                                    </div>
                                    <div className='add-cart-content'>
                                        <Row>
                                            <Col lg={10}>
                                        <h2>{item.product_name}</h2>
                                            </Col>
                                            <Col lg={2}>
                                            <div className='text-center'>
                                                <button onClick={(e)=>deleteDataById(item.id)}className="showSize">Remove</button>
                                           </div> </Col>
                                        </Row>
                                        <h5>Weight 10gms</h5>
                                        <p>Size: 45 <span>Quantity: 4</span></p>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={10}></Col>
                                    <Col lg={2}><h5 className='p-2'>Weight 40gms</h5></Col>
                                   </Row>
                                <div className=''>
                                    <img src={border} />
                                </div>
                            </div>
                    </Col>
                </Row>
                ))
                ) : null}
                 <div className='text-center mt-3'>
                    <Link to='/check-invoice' className="showSize">
                        Submit
                    </Link>
                    </div>
            </section>
            <Footer />
        </>
    )
}
export default Addcart

