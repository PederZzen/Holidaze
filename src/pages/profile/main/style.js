import styled from 'styled-components'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    height: 100vh;
    max-width: 1000px;
    margin: auto;

    .ant-tabs-nav {
        padding-left: 0.5rem;
    }

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
