import React from 'react'
import Bookings from './bookings'
import { Wrapper } from './style'
import Venues from './venues'
import { Tabs } from 'antd'

const Main = ({ profile }) => {
    const user = localStorage.getItem('name')
    return (
        <Wrapper>
            <Tabs
                defaultActiveKey="1"
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1)
                    const label = [
                        user === profile.name ? 'My venues' : 'Venues',
                        user === profile.name ? 'My bookings' : '',
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
