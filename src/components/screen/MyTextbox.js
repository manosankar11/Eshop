import React from 'react';
import { Form} from "react-bootstrap";

export const MyTextbox = (props) => {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} />
        </Form.Group>
    )
}
