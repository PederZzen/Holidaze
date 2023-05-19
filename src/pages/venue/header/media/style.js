import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;

    * {
        max-height: 20rem;
        object-fit: cover;
        width: 100%;
    }

    @media screen and (min-width: 750px) {
        padding: 4rem 0.5rem;
        max-width: 750px;
        margin: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1200px;

        * {
            max-height: 25rem;
            max-width: 40rem;
        }
    }
`
