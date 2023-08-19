import React, { useState, useEffect } from "react";
import Header from "../../directives/header";
import Footer from "../../directives/footer";
import { Container, Row, Col } from "react-bootstrap";
import blog1 from "../../assets/images/img/blog.png";
import { BASE_URL } from "../../Constant/Index";
import bannertwo from '../../assets/images/banner/image 12.png'
import border from '../../assets/images/banner/border.png'
import { Link } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [showFullParagraph, setShowFullParagraph] = useState(false);
  const [paragraphData, setParagraphData] = useState('');


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

  const renderBlogDescription = (description) => {
    const maxCharacters = 350; // Number of characters to show initially

    if (description.length <= maxCharacters) {
      return <p>{description}</p>; // Show the full description if it's short
    }

    const truncatedDescription = description.slice(0, maxCharacters);

    return (
      <>
        <p>{truncatedDescription}.......</p>
      </>
    );
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
                <Col lg={12} className="mb-4">
                  <div className="blog-card" key={blog.id}>
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
                          <p>{renderBlogDescription(blog.description)}</p>
                          <Link to={`/blog-details/${blog.id}`}>Read More</Link>
                          <hr />
                          <Row>
                            <Col lg={8}>
                            <div className="blog-comment">
                              <Link><i className="fa fa-user" /> {blog.author}</Link>
                              {/* <Link><i className="fa fa-commenting-o" /> 20 Comment</Link> */}
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="text-right">
                                <h6>20 july,2020</h6>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
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



// import React, { useState, useEffect } from "react";
// import Header from "../../directives/header";
// import Footer from "../../directives/footer";
// import { Container, Row, Col } from "react-bootstrap";
// import blog1 from "../../assets/images/img/blog.png";
// import { BASE_URL } from "../../Constant/Index";
// import bannertwo from '../../assets/images/banner/image 12.png'
// import border from '../../assets/images/banner/border.png'
// import { Link } from "react-router-dom";

// function Blog() {
//   const [blogs, setBlogs] = useState([]);

//   const fetchBlogs = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/auth/blog`);
//       const data = await response.json();
//       setBlogs(data.data);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//    // Number of characters to show initially

   
    

  

//   return (
//     <>
//       <Header />
//       <div className='allPage-bgtwo'>
//         <Container fluid className='p-0'>
//           <img src={bannertwo} alt="" />
//         </Container>
//       </div>

//       <section className='section-padding'>
//         <Container>
//           <Row className="justify-content-center">
//             <Col lg={9}>
//               <div className='text-center'>
//                 <h4 className='main-heading text-center'>All Blogs</h4>
//                 <div className='all-border'>
//                   <img src={border} alt="" />
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="section-padding">
//         <Container>
//           <Row>
//             {blogs &&
//               blogs.map((blog) => (
//                 <Col lg={12} className="mb-4" key={blog.id}>
//                   <div className="blog-card">
//                     <Row>
//                       <Col sm={5}>
//                         <img
//                           src={
//                             blog.image
//                               ? `https://veejayjewels.com/storage/app/public/banner/${blog.image}`
//                               : blog1
//                           }
//                           alt=""
//                         />
//                       </Col>
//                       <Col sm={7} className="align-self-center">
//                         <div className="blog-cardContent">
//                           <h4>{blog.title}</h4>
//                           {blog.description}
//                           <Link to={`/blog-details/${blog.id}`}>
//                           Read More</Link>
//                         </div>
//                       </Col>
//                     </Row>
//                   </div>
//                 </Col>
//               ))}
//           </Row>
//         </Container>
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default Blog;




