import React from 'react';
import { Col, Container, Form, Row } from "react-bootstrap";
import FormHeader from '../FormHeader';
import MyBtn from '../MyBtn';
import { MyTextbox } from '../MyTextbox';

const LoginPage = () => {
    return (
        <div className="home" style={{ display: 'flex' }} >
            <Container>
                <FormHeader className="shadow-sm text-success mt-5 p-3 text-center rounded" heading="Login Here" />
                <Row className="mt-3">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <MyTextbox controlId="formBasicEmail" label="Email" placeholder="Enter Email" type="email" />
                            <MyTextbox controlId="formBasicPassword" label="Password" placeholder="Password" type="password" />
                            <MyBtn title="Login" type="sumbit" variant="success btn-block" />
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>


    );
};

export default LoginPage;