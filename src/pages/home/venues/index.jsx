import React, { useState } from 'react'
import { Filter, Wrapper } from './style'
import Venue from '../../../components/venue'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icons } from '../../../utils/constants'

const Venues = ({ venues }) => {
    const [search, setSearch] = useState('')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(2000)

    const filteredVenues = venues.filter((venue) => {
        return (
            (venue.name.toLowerCase().includes(search.toLowerCase()) ||
                venue.owner.name.toLowerCase().includes(search.toLowerCase()) ||
                venue.location.city
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                venue.location.country
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                venue.location.address
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                venue.location.continent
                    .toLowerCase()
                    .includes(search.toLowerCase())) &&
            venue.price >= minPrice &&
            venue.price <= maxPrice
        )
    })

    console.log(venues)

    return (
        <Wrapper>
            <Filter>
                <div className="searchWrappper">
                    <label htmlFor="search">Search</label>
                    <div className="search">
                        <FontAwesomeIcon icon={Icons.searchIcon} />
                        <input
                            type="text"
                            id="search"
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className="price">
                    <div>
                        <label htmlFor="min">Min Price</label>
                        <input
                            type="number"
                            id="min"
                            min="0"
                            defaultValue="0"
                            onChange={(e) => {
                                setMinPrice(Number(e.target.value))
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="min">Max Price</label>
                        <input
                            type="number"
                            id="max"
                            defaultValue="2000"
                            onChange={(e) => {
                                setMaxPrice(Number(e.target.value))
                            }}
                        />
                    </div>
                </div>
            </Filter>
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
