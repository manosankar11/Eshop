import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className = "home" >
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Login Here</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                Login
                            </Button>
                            <h5>New here ? <Link to="./register">Register</Link></h5>
                        </Form>
                    </Col>
                </Row>
               
            </Container>
        </div>
            
        
    );
};

export default LoginPage;