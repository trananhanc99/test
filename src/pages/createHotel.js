import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
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
    NavbarText, Alert
  } from 'reactstrap';
  import {
    Link
  } from "react-router-dom";
//   postHotel
const Api = 'http://localhost:8000/v1/postHotel';
const CreateHotel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [link, setLink] = useState('');
    const [desc, setDesc] = useState('');
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);
    const getValueName = (e) => {
        setName(e.target.value)
    }
    const getValueLink = (e) => {
        setLink(e.target.value)
    }
    const getValuePhone = (e) => {
        setPhone(e.target.value)
    }
    const getValueDe = (e) => {
        setDesc(e.target.value);
    }
    const userAndToken = () => {
        const localS = localStorage.getItem('login');
        if(localS) return JSON.parse(localS);
        return null;
    }
    const AuthStr = userAndToken().token;
    const createHotel = (e) => {
        e.preventDefault();
        axios.post(Api, {
            nameHotel: name,
            descriptionsHotel: desc,
            avatar: link,
            numberHotel: phone,
          }, {headers: { bearer: AuthStr }})
          .then((response) => {
            setVisible(true);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  return (
    <Container>
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
            Go to page <Link to="/home">Home</Link>
        </Alert>
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
        <Form>
            <FormGroup>
                <Label for="nameHotel">Name Hotel's</Label>
                <Input type="email" onChange={getValueName} name="email" id="nameHotel" placeholder="Enter name hotel" />
            </FormGroup>
            <FormGroup>
                <Label for="nameHotel">Link Img</Label>
                <Input type="text" onChange={getValueLink} name="linkimg" id="nameHotel" placeholder="Enter link img" />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone Hotel's</Label>
                <Input type="number" onChange={getValuePhone} name="number" id="phone" placeholder="Enter phone number" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">DescriptionsHotel</Label>
                <Input type="textarea" onChange={getValueDe} name="text" id="exampleText" />
            </FormGroup>
            <Button onClick={createHotel}>Create Hotel</Button>
        </Form>
    </Container>
    
  );
}

export default CreateHotel;