import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Events from '../Events/Events';
import Vendors from '../Vendors/Vendor';
import Products from '../Products/Products';


function NavigationBar() {
  return (
    <Router>
      <Navbar expand="lg" className="back" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand>Connex Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink to="/Events&News" activeclassname='active-link'  className="navlinks">Events & News</NavLink>
              <NavLink to="/Vendors" activeclassname='active-link'  className="navlinks">Vendors</NavLink>
              <NavLink to="/Products" activeclassname='active-link'  className="navlinks">Products</NavLink>
            </Nav>
            <Nav>
              <Button variant="primary">Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path=""  Component={Events}></Route>
        <Route path="/Events&News"  Component={Events}></Route>
        <Route path="/Vendors"  Component={Vendors}></Route>
        <Route path="/Products"  Component={Products}></Route>
      </Routes>

    </Router>
  );
}

export default NavigationBar;