import React, { useState, useEffect } from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import { Container, Row, Col } from "react-bootstrap";
import blog1 from "../../assets/images/img/blog1.webp";
import blog2 from "../../assets/images/img/blog2.webp";
import blog3 from "../../assets/images/img/blog3.webp";
import { BASE_URL } from "../../Constant/Index";
import bannertwo from '../../assets/images/banner/image 12.png'
import border from '../../assets/images/banner/border.png'

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${BASE_URL}/auth/blog`);
      const data = await response.json();
      setBlogs(data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <Header />
      <div className='allPage-bgtwo'>
                <Container fluid className='p-0'>
                    <img src={bannertwo} />
                </Container>
            </div>

            <section className='section-padding'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9}>
                            <div className='text-center'>
                                <h4 className='main-heading text-center'>All Blogs</h4>
                                <div className='all-border'>
                                    <img src={border} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

      <section className="section-padding">
        <Container>
          <Row>
            {blogs &&
              blogs.map((blog) => (
                <Col lg={4} className="mt-2 mb-2">
                  <div className="blog-card" key={blog.id}>
                    <img
                      src={
                        blog.image
                          ? `https://veejayjewels.com/storage/app/public/banner/${blog.image}`
                          : blog1
                      }
                      alt=""
                    />
                    <div className="blog-cardContent">
                      <h3>{blog.title}</h3>
                      <p>{blog.description}</p>
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

export default Blog;
