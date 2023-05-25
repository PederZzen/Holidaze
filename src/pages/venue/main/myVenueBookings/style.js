import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 0 0.5rem;
    max-width: 30rem;
    margin: 2rem 0;

    h2 {
        margin: 4rem 0 2rem;
    }

    div {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 1rem;

        &:nth-of-type(odd) {
            background-color: #c8d4db;
        }
    }

    @media screen and (min-width: 1200px) {
        position: absolute;
        width: 25rem;
        top: 0;
        right: 0;
    }
`
