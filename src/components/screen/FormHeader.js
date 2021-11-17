import React from 'react'

const FormHeader = (props) => {
    return (
        <div>
            <h1 className={props.className}>{props.heading}</h1>
        </div>
    )
}

export default FormHeader
