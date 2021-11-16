import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
           <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Register Here</h1>
                <Row className="mt-4">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="email" placeholder="Phone Number" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                Register
                            </Button>
                            <h5> Already Registered ? <Link to="./login">Login</Link></h5>
                        </Form>
                    </Col>
                </Row>
               
            </Container>
        </>
        </div>
    )
}

export default Register
