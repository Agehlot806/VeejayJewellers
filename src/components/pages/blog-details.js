import React, { useState, useEffect } from "react";
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col } from "react-bootstrap";
import { BASE_URL } from '../../Constant/Index';
import blog1 from "../../assets/images/img/blog.png";
import { useParams } from "react-router-dom";
import axios from "axios";

function Blogdetails() {
    const{id}=useParams()
    console.log("id",id);
    useEffect(()=>{
        allblogs();
    },[])
    const [blogsdata, setBlogsdata] = useState([]);

    const allblogs = () => {
        axios
          .get(`${BASE_URL}/auth/blog_detail/${id}`)
          .then((response) => {
            setBlogsdata(response.data.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      };
   




    return (
        <>
            <Header />
            <section className='section-padding'>
                <Container>
                    <Row className=''>
                        <Col lg={10}>
                            <div className='blogDetails'>
                            {blogsdata &&
              blogsdata.map((blog) => (
                <Col lg={12} className="mb-4" key={blog.id}>
                  <div className="blog-card">
                    <Row>
                      <Col sm={5}>
                        <img
                          src={
                            blog.image
                              ? `https://veejayjewels.com/storage/app/public/banner/${blog.image}`
                              : blog1
                          }
                          alt=""
                        />
                      </Col>
                      <Col sm={7} className="align-self-center">
                        <div className="blog-cardContent">
                          <h4>{blog.title}</h4>
                          <p>{blog.description}</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />

        </>
    )
}

export default Blogdetails