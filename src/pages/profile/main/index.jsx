import React from 'react'
import Bookings from './bookings'
import { StyledTabs, Wrapper } from './style'
import Venues from './venues'

const Main = ({ profile }) => {
    const user = localStorage.getItem('name')
    console.log('hei')
    return (
        <Wrapper>
            <StyledTabs
                defaultActiveKey="1"
                centered
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1)
                    const label = [
                        user === profile.name ? 'My Bookings' : '',
                        user === profile.name && profile.venueManager === true
                            ? 'My Venues'
                            : '',
                    ]
                    const content = [
                        <Bookings bookings={profile.bookings} />,
                        user === profile.name &&
                        profile.venueManager === true ? (
                            <Venues venues={profile.venues} />
                        ) : (
                            ''
                        ),
                    ]
                    return {
                        label: label[i],
                        key: id,
                        children: content[i],
                    }
                })}
            />
        </Wrapper>
    )
}

export default Main
