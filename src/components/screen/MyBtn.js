
import React from 'react';

import { Button } from "react-bootstrap";

const MyBtn = (props) => {
    return (
        <Button variant={props.variant} type={props.type}>
            {props.title}
        </Button>
    )
}

export default MyBtn
