import { Dropdown, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/images/logo/logo.png';
import shoppingIcon from '../assets/images/icons/bag-2.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="white" expand="lg" className='header-bg'>
            <Container>
                <Navbar.Brand><Link to='/'><img src={logo} className='logo' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className='header-menu'>
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                    // style={{ maxHeight: '100px' }}
                    // navbarScroll
                    >
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">AboutUs</Link></Nav.Link>
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Brands
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href=""><i className="fa fa-angle-double-right" /> <Link to='/ARHA-brands'>ARHA</Link></Dropdown.Item>
                                    <Dropdown.Item href=""><i className="fa fa-angle-double-right" /> <Link to='/VDANA-brands'>V'DANA</Link></Dropdown.Item>
                                    <Dropdown.Item href=""><i className="fa fa-angle-double-right" /> <Link to='/IRKA-brands'>IRKA</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Product
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item><i className="fa fa-angle-double-right" /> <Link to='/bangles'>Bangle</Link> </Dropdown.Item>
                                    <Dropdown.Item><i className="fa fa-angle-double-right" /> <Link to='/nacklaces'>Necklaces</Link></Dropdown.Item>
                                    <Dropdown.Item><i className="fa fa-angle-double-right" /> <Link to='/chains'>Chains</Link></Dropdown.Item>
                                    <Dropdown.Item><i className="fa fa-angle-double-right" /> <Link to='/rings'>Rings</Link></Dropdown.Item>
                                    <Dropdown.Item><i className="fa fa-angle-double-right" /> <Link to='/earrings'>Earrings</Link></Dropdown.Item>
                                    <Dropdown.Item><i className="fa fa-angle-double-right" /> <Link to='/bracelets'>Bracelets</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Catalogue
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href=""><i className="fa fa-angle-double-right" /> <Link to='/women'>Women</Link></Dropdown.Item>
                                    <Dropdown.Item href=""><i className="fa fa-angle-double-right" /> <Link to='/men'>Men</Link></Dropdown.Item>
                                    <Dropdown.Item href=""><i className="fa fa-angle-double-right" /> <Link to='/kids'>Kids</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Pages
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href=""><i className="fa fa-angle-double-right" /> <Link to='/helpandFAQs'>Help & FAQs</Link></Dropdown.Item>
                                    <Dropdown.Item href=""><i className="fa fa-angle-double-right" /> <Link to='/offers-details'>Offers Details</Link></Dropdown.Item>
                                    <Dropdown.Item href=""><i className="fa fa-angle-double-right" /> <Link to='/blog'>Blog</Link></Dropdown.Item>
                                    <Dropdown.Item href=""><i className="fa fa-angle-double-right" /> <Link to='/contact'>Contacts</Link></Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                        {/* <Nav.Link href="">Contacts</Nav.Link> */}
                        {/* <Nav.Link href="">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Nav.Link> */}
                         <Nav.Link className='header-bag'><Link to='/calculator'><i className="fa fa-calculator" /></Link></Nav.Link>
                        <Nav.Link className='header-bag'><i className="fa fa-shopping-bag" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;