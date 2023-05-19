import styled from 'styled-components'
import { Tabs } from 'antd'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    background-color: ${color.light};
    border-radius: 1rem 1rem 0 0;
    height: 100vh;

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
