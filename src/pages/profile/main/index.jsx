import React from 'react'
import Bookings from './bookings'
import { StyledTabs, Wrapper } from './style'
import Venues from './venues'

const Main = ({ profile }) => {
    const user = localStorage.getItem('name')
    return (
        <Wrapper>
            <StyledTabs
                defaultActiveKey="1"
                centered
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1)
                    const label = [
                        'Venues',
                        user === profile.name ? 'Bookings' : '',
                    ]
                    const content = [
                        <Venues venues={profile.venues} />,
                        user === profile.name ? (
                            <Bookings bookings={profile.bookings} />
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
