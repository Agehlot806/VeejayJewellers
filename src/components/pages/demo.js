// import React, { useState, useEffect, useRef } from 'react';
// const Demo = () => {
//   const [states, setStates] = useState([]);
//   const [selectedState, setSelectedState] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   useEffect(() => {
//     fetchDataAll();
//   }, []);
//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);
//   const fetchDataAll = async () => {
//     try {
//       const response = await fetch('http://veejayjewels.com/api/v1/auth/state');
//       const data = await response.json();
//       setStates(data.state);
//     } catch (error) {
//       console.error('ERROR FOUND---->>>>', error);
//     }
//   };
//   const toggleDropdown = () => {
//     setIsDropdownOpen((prevState) => !prevState);
//   };
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsDropdownOpen(false);
//     }
//   };
//   const inputSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setIsDropdownOpen(true); // Show the dropdown when typing in the input
//   };
//   const handleOptionClick = (state) => {
//     setSelectedState(state);
//     setIsDropdownOpen(false);
//     setSearchTerm('');
//   };
//   const filteredStates = states.filter((item) =>
//     item.state_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   return (
//     <div ref={dropdownRef} className="searchable-select">
//       <div className="select-input" onClick={toggleDropdown}>
//         <span>{selectedState ? selectedState.state_name : 'Select a state'}</span>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={inputSearch}
//           placeholder="Search state..."
//         />
//       </div>
//       {isDropdownOpen && (
//         <ul className="select-options">
//           {filteredStates.map((state) => (
//             <li key={state.id} onClick={() => handleOptionClick(state)}>
//               {state.state_name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
// export default Demo;





// import React, { useState, useEffect } from 'react';
// import { Col, Nav, Row } from 'react-bootstrap';
// import axios from 'axios';
// import _ from 'lodash';
// import { BASE_URL } from '../../Constant/Index';
// import { Link } from 'react-router-dom';


// const Demo = () => {
//   const pageSize = 3;
//   // const [brandcategories, setBrandCategories] = useState([]);
//   const [paginatedCategories, setPaginatedCategories] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [allproduct, setallproduct] = useState([]);


//   useEffect(() => {
//     // Fetch brand categories data from the API when the component mounts
//     allProduct();
//   }, []);

//   useEffect(() => {
//     // Update the paginated categories whenever brandcategories or currentPage changes
//     pagination(currentPage);
//   }, [allproduct, currentPage]);

//   const allProduct = () => {
//     axios
//       .get(`${BASE_URL}/products/latest`)
//       .then((response) => {
//         console.log(response.data);
//         setallproduct(response.data.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const pageCount = allproduct ? Math.ceil(allproduct.length / pageSize) : 0;
//   const pages = _.range(1, pageCount + 1);

//   const pagination = (pageNo) => {
//     setCurrentPage(pageNo);
//     const startIndex = (pageNo - 1) * pageSize;
//     const paginated = _(allproduct).slice(startIndex).take(pageSize).value();
//     setPaginatedCategories(paginated);
//   };

//   return (
//     <div>
//       <h2>Brand Categories</h2>
//       {/* <Nav className="flex-column">
//         {paginatedCategories.map((item, index) => (
//           <Nav.Item key={index}>
//             <Nav.Link eventKey={item.name}>
//               {item.name}
//             </Nav.Link>
//           </Nav.Item>
//         ))}
//       </Nav> */}
//         <Row>
//                       {paginatedCategories.map((item) => (
//                         <Col lg={4} sm={4} xs={6} className="mb-4" key={item.id}>
//                           <div className="mainProductcard">
//                             <Link to={`/product-details/${item.id}`}>
//                               <h4>{item.name}</h4>
//                               <p>{item.unit_value} {item.unit}</p>
//                               <span>Karat : {item.purity}</span>
//                               <div className="product-btnarea">
//                                 <Link to="/add-to-cart" className="product-addBtn">
//                                   Add To Cart
//                                 </Link>
//                               </div>
//                             </Link>
//                           </div>
//                         </Col>
//                       ))
//                       }
                      
                     

//                     </Row>
//       <nav>
//         <ul className="pagination">
//           {pages.map((page) => (
//             <li
//               key={page}
//               className={page === currentPage ? 'page-item active' : 'page-item'}
//             >
//               <button className="page-link" onClick={() => pagination(page)}>
//                 {page}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Demo;

import React from 'react'

function Demo() {
  return (
    <div>
        <div className="row">
          <div className="column">
            <img src="img_nature.jpg" style={{width: '100%'}} onclick="openModal();currentSlide(1)" className="hover-shadow cursor" />
          </div>
          <div className="column">
            <img src="img_snow.jpg" style={{width: '100%'}} onclick="openModal();currentSlide(2)" className="hover-shadow cursor" />
          </div>
          <div className="column">
            <img src="img_mountains.jpg" style={{width: '100%'}} onclick="openModal();currentSlide(3)" className="hover-shadow cursor" />
          </div>
          <div className="column">
            <img src="img_lights.jpg" style={{width: '100%'}} onclick="openModal();currentSlide(4)" className="hover-shadow cursor" />
          </div>
        </div>
        <div id="myModal" className="modal">
          <span className="close cursor" onclick="closeModal()">×</span>
          <div className="modal-content">
            <div className="mySlides">
              <div className="numbertext">1 / 4</div>
              <img src="img_nature_wide.jpg" style={{width: '100%'}} />
            </div>
            <div className="mySlides">
              <div className="numbertext">2 / 4</div>
              <img src="img_snow_wide.jpg" style={{width: '100%'}} />
            </div>
            <div className="mySlides">
              <div className="numbertext">3 / 4</div>
              <img src="img_mountains_wide.jpg" style={{width: '100%'}} />
            </div>
            <div className="mySlides">
              <div className="numbertext">4 / 4</div>
              <img src="img_lights_wide.jpg" style={{width: '100%'}} />
            </div>
            <a className="prev" onclick="plusSlides(-1)">❮</a>
            <a className="next" onclick="plusSlides(1)">❯</a>
            <div className="caption-container">
              <p id="caption" />
            </div>
            <div className="column">
              <img className="demo cursor" src="img_nature_wide.jpg" style={{width: '100%'}} onclick="currentSlide(1)" alt="Nature and sunrise" />
            </div>
            <div className="column">
              <img className="demo cursor" src="img_snow_wide.jpg" style={{width: '100%'}} onclick="currentSlide(2)" alt="Snow" />
            </div>
            <div className="column">
              <img className="demo cursor" src="img_mountains_wide.jpg" style={{width: '100%'}} onclick="currentSlide(3)" alt="Mountains and fjords" />
            </div>
            <div className="column">
              <img className="demo cursor" src="img_lights_wide.jpg" style={{width: '100%'}} onclick="currentSlide(4)" alt="Northern Lights" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Demo
