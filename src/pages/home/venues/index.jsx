import React, { useState } from 'react'
import { Search, Wrapper } from './style'
import Venue from '../../../components/venue'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icons } from '../../../utils/constants'

const Venues = ({ venues }) => {
    const [search, setSearch] = useState('')

    const filteredVenues = venues.filter((venue) => {
        return venue.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <Wrapper>
            <Search>
                <div>
                    <FontAwesomeIcon icon={Icons.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search.."
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                </div>
            </Search>
            {filteredVenues
                ? filteredVenues?.map((venue, idx) => {
                      return (
                          <Venue key={idx} venue={venue}>
                              {venue.name}
                          </Venue>
                      )
                  })
                : 'No data..'}
        </Wrapper>
    )
}

export default Venues
