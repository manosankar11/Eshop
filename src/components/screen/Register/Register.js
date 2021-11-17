import React from 'react';
import { Col, Container, Form, Row } from "react-bootstrap";
import FormHeader from '../FormHeader';
import MyBtn from '../MyBtn';
import { MyTextbox } from '../MyTextbox';

const Register = () => {
    return (
        <div>
            <>
                <Container>
                    <FormHeader className="shadow-sm text-success mt-5 p-3 text-center rounded" heading="Register Here" />
                    <Row className="mt-4">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                            <Form>
                                <MyTextbox controlId="formBasicText" label="Name" placeholder="Enter Name" type="text" />
                                <MyTextbox controlId="formBasicEmail" label="Email" placeholder="Enter Email" type="email" />
                                <MyTextbox controlId="formBasicText" label="Phone " placeholder="Phone Number" type="text" />
                                <MyTextbox controlId="formBasicPassword" label="Password" placeholder="Password" type="password" />
                                <MyBtn title="Register" type="sumbit" variant="success btn-block" />

                            </Form>
                        </Col>
                    </Row>

                </Container>
            </>
        </div>
    )
}

export default Register
