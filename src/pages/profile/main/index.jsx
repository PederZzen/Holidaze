import React from 'react'
import Bookings from './bookings';
import { StyledTabs, Wrapper } from './style';
import Venues from './venues';

const Main = ({ profile }) => {
    return (
        <Wrapper>
            <StyledTabs defaultActiveKey="1" centered
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    const label = ["My Bookings", "My Venues"]
                    const content = [<Bookings />, <Venues venues={profile.venues} />,]
                    return {
                        label: label[i],
                        key: id,
                        children: content[i],
                    };
                })}
            />
        </Wrapper>
    )
}

export default Main
