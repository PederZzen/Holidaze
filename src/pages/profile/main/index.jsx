import TabPane from 'antd/es/tabs/TabPane';
import React from 'react'
import Bookings from './bookings';
import { StyledTabs, Wrapper } from './style';
import Venues from './venues';

const Main = () => {
    return (
        <Wrapper>
            <StyledTabs defaultActiveKey="1" centered
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    const label = ["My Bookings", "My Venues"]
                    const content = [<Venues />, <Bookings />]
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
