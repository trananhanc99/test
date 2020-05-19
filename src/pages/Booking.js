import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Row, Col, Container,
    NavbarText,
    Table
  } from 'reactstrap';
  import {
    Link
  } from "react-router-dom";
const Api = 'http://localhost:8000/v1/getAllBooking';
const CreateHotel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [dataBookingHotel, setDataBookingHotel] = useState([])
    const userAndToken = () => {
        const localS = localStorage.getItem('login');
        if(localS) return JSON.parse(localS);
        return null;
    }
    const AuthStr = userAndToken().token;
    useEffect(() => {
        axios({
            method: 'get',
            url: Api,
            headers: { bearer: AuthStr }
        })
        .then((response) => {
            console.log(response.data)
            setDataBookingHotel(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
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
            <Table striped>
      <thead>
        <tr>
          <th>Name Hotel</th>
          <th>Username</th>
          <th>Number Hotel</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {
            dataBookingHotel.map((el, i) => 
            <tr>
                <td>{el.nameHotel}</td>
                <td>{el.username}</td>
                <td>{el.numberHotel}</td>
                <td>{el.publishedAt}</td>
            </tr>
            )
        }
      </tbody>
    </Table>
    </Container>
    
  );
}

export default CreateHotel;