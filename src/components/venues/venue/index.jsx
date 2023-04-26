import React from 'react'
import { Link } from 'react-router-dom'
import MaxGuests from './maxGuests'
import Media from './media'
import Price from './price'
import { Content, Wrapper } from './style'

const Venue = ({ venue }) => {

    return (
        <Link to={`/venue/${venue.id}`}>
            <Wrapper>
                <Media media={venue.media} name={venue.name}/>
                <Content>
                    <div>
                        <h3>{venue.name}</h3>
                        <MaxGuests maxGuests={venue.maxGuests} />
                    </div>
                    <Price price={venue.price} />
                </Content>
            </Wrapper>
        </Link>
    )
}

export default Venue