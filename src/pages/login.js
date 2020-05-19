import React, {useState} from 'react'
import {Col, Row, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styleLe.css';
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
    Link
  } from "react-router-dom";
const Api = 'http://localhost:8000/v1/login';
const LoginPage = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [username, setUsername] = useState('');
    const [passwd, setPasswd] = useState('');
    const [errLogin, setErrLogin] = useState('');
    
    const getEmail = (e) => {
        setUsername(e.target.value);
    }
    const getPasswd = (e) => {
        setPasswd(e.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(Api, {
            username,
            passwd
          })
          .then((response) => {
            if(response.status === 200) {
                localStorage.setItem('login', JSON.stringify({
                    login: true,
                    token: response.data
                }))
                props.history.push('/home');
            }
          })
          .catch((error) => {
            console.log(error);
          });
    }
    return (
        <Container className="login">
            <Navbar light expand="md">
                <NavbarBrand>
                    <Link to='/'>Home</Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink>
                        <Link to='/register'>
                            Register
                        </Link>
                    </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            <Row>
                <Col md="7">
                </Col>
                <Col md="5">
                    <Form>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                            <Input type="email" onChange={getEmail} value={username} name="email" id="exampleEmail" placeholder="Enter email here" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">Password</Label>
                            <Input type="password" onChange={getPasswd} value={passwd} name="password" id="examplePassword" placeholder="Enter passwd here" />
                        </FormGroup>
                        <Button onClick={handleLogin} className='btn-login'>Login</Button>
                    </Form>
                </Col>                
            </Row>
        </Container>
    )
}

export default LoginPage;