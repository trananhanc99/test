import React, {useState} from 'react'
import {Col, Row, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styleLe.css';
import axios from 'axios';
const Api = 'http://localhost:8000/v1/register';
const RegisterPages = (props) => {
    const [username, setUsername] = useState('');
    const [passwd, setPasswd] = useState('');
    const [rPasswd, setRePasswd] = useState('');
    const getEmail = (e) => {
        setUsername(e.target.value);
    }
    const getPasswd = (e) => {
        setPasswd(e.target.value);
    }
    const getRePasswd = (e) => {
        setRePasswd(e.target.value);
    }
    const handleRegister = (e) => {
        e.preventDefault();
        axios.post(Api, {
            username,
            passwd
          })
          .then((response) => {
            const {statusCode, message} = response.data;
            console.log(response);
            console.log(statusCode);
            if(statusCode !== 200) {
                setUsername('');
                setRePasswd('');
                setPasswd('');
            }
            props.history.push('/login');
          })
          .catch((error) =>  {
            console.log(error);
          });

    }
    return (
        <Container className="login">
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
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="RePassword" className="mr-sm-2">Password</Label>
                            <Input type="password" onChange={getRePasswd} value={rPasswd} name="password" id="RePassword" placeholder="Enter passwd here" />
                        </FormGroup>
                        <Button onClick={handleRegister} className='btn-login'>Register</Button>
                    </Form>
                </Col>                
            </Row>
        </Container>
    )
}

export default RegisterPages;