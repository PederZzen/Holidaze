import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'
import Button from '../../components/button'
import Meta from '../../utils/meta'

const RouteNotFound = () => {
    return (
        <>
            <Meta title="404" description="Page not found" />
            <Wrapper>
                <h1>404: Page not found</h1>
                <Link to="/">
                    <Button content="Back to main page"></Button>
                </Link>
            </Wrapper>
        </>
    )
}

export default RouteNotFound
