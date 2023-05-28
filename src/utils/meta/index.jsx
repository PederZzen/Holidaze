import React from 'react'
import { Helmet } from 'react-helmet-async'

const Meta = (props) => {
    return (
        <Helmet>
            <title>Holidaze | {props.title}</title>
            <meta name={props.description}></meta>
        </Helmet>
    )
}

export default Meta
