import styled from 'styled-components'
import { Tabs } from 'antd'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    /* background-color: ${color.light}; */
    height: 100vh;
    max-width: 1200px;
    margin: auto;

    .ant-tabs-tab {
        &:hover {
            color: ${color.accent};
            filter: brightness(150%);
        }
    }

    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: ${color.accent};
        font-weight: 500;
    }

    .ant-tabs-ink-bar {
        background-color: ${color.accent};
    }

    a:hover {
        color: ${color.accent};
    }
`
export const StyledTabs = styled(Tabs)``
