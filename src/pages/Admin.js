import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row, Col, Container,
    NavbarText
  } from 'reactstrap';
  import {
    Link
  } from "react-router-dom";
const PageAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Container>
            <Navbar light expand="md">
                <NavbarBrand>
                    <Link to='/'>Home</Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink>
                        <Link to='/home'>
                            Home Pages
                        </Link>
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink>
                        <Link to='/createHotel'>
                            Create Hotel
                        </Link>
                    </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink>
                        <Link to='/booking'>
                            Booking Hotel
                        </Link>
                    </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>
                    <Link to='/'>Log out</Link>
                </NavbarText>
                </Collapse>
            </Navbar>
        </Container>
    )
}

export default PageAdmin;