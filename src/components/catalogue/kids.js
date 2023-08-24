import React, { useEffect, useState } from 'react'
import Header from '../../directives/header'
import Footer from '../../directives/footer'
import { Container, Row, Col, Nav, Tab, Tabs } from 'react-bootstrap'
import bannertwo from '../../assets/images/banner/image 12.png'
import border from '../../assets/images/banner/border.png'
import { BASE_URL } from '../../Constant/Index'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Kids() {
  useEffect(() => {
    childS()
  }, [])
  const [child, setchild] = useState([])
  const childS = () => {
    axios
      .get(`${BASE_URL}/auth/catalogue`)
      .then((response) => {
        console.log(response.data.data)
        setchild(response.data.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const [image, setimage] = useState("");
  const [file, setfile] = useState("");
  const [title, settitle] = useState("");
  const SubCategory = (thumnail, title, file) => {
    console.log("categoery", thumnail, title);
    setimage(thumnail)
    settitle(title)
    setfile(file)
  };
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
                <h4 className='main-heading text-center'>Catalogue</h4>
                <div className='all-border'>
                  <img src={border} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className=''>
        <Container>
          <div className='catloggg'>
            <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All Products</a>
              </li>
              {child ? (
                child.map((item, index) => (
                  item.type === 'child' && (
                    <li className="nav-item">
                      <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <div onClick={(e) => SubCategory(item.thumnail, item.title, item.file)}
                        >{item.categoery}</div>
                      </a>
                    </li>
                  )
                ))
              ) : null}
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <Row>
                  {child ? (
                    child.map((item, index) => (
                      item.type === 'child' && (
                        <Col lg={4} sm={6} xs={6} className='mt-2 mb-2'>
                          <div className='catlogOne'>
                            <Row>
                              <Link to={"https://veejayjewels.com/storage/app/public/pdf/" + item.file}>
                                <Col sm={12} className='mb-3'>
                                  <img src={"https://veejayjewels.com/storage/app/public/catalog/" + item.thumnail} />
                                  {/* <h2>{item.title}</h2>
                                  <p>Read More</p> */}
                                </Col>
                              </Link>
                            </Row>
                          </div>
                        </Col>
                      )
                    ))
                  ) : null}
                </Row>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <Row>
                  <Col lg={4} sm={6} xs={6} className='mt-2 mb-2'>
                    <div className='catlogOne'>
                      <Row>
                        <Link to={"https://veejayjewels.com/storage/app/public/pdf/" + file}>
                          <Col sm={12} className='mb-3'>
                            <img src={"https://veejayjewels.com/storage/app/public/catalog/" + image} />
                            {/* <h2>{title}</h2>
                                  <p>Read More</p> */}
                          </Col>
                        </Link>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className='section-padding'></section>
      <Footer />
    </>
  )
}
export default Kids

