import React, {useEffect, useState} from 'react'
import { Row, Col, Container } from 'reactstrap';
import CardInfo from '../components/infoHotel';
import axios from 'axios';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
  import {
    Link, Redirect
  } from "react-router-dom";
//http://localhost:8000/v1/postHotel
const Api = 'http://localhost:8000/v1/postHotel';
const ApiBooking = 'http://localhost:8000/v1/bookingHotel';

const HomePages = (props) => {
    const [dataHotel, setDataHotel] = useState([])
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
                console.log('hell')
                setDataHotel(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const handleDelete = (id) => {
        const ApiPut = `http://localhost:8000/v1/postHotel/${id}`;
        axios.delete(ApiPut, {headers: { bearer: AuthStr }})
          .then((response) => {
              console.log(response)
          })
          .catch((error) => {
            
          });
    }
    const handleBooking = (id) => {
        axios.post(ApiBooking, {
            id
          }, {headers: { bearer: AuthStr }})
          .then((response) => {
            
          })
          .catch((error) => {
            
          });
    }
    const [isOpen, setIsOpen] = useState(false);
    const logout = () => {
        localStorage.removeItem('login');
        props.history.push('/login');
    }
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
                            <Link to='/admin'>
                                Admin
                            </Link>
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Link onClick={logout}>Log out</Link>
                    </NavbarText>
                    </Collapse>
                </Navbar>
            <Row>
                {
                    dataHotel.map((el, i) =>
                        <Col md="4" key={i}>
                            <CardInfo title={el.nameHotel} img={el.avatar} detail={el.descriptionsHotel} btnD={() => handleDelete(el._id)} btnE={el._id} btnB={() => handleBooking(el._id)}></CardInfo>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

export default HomePages;