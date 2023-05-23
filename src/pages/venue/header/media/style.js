import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    gap: 0.5rem;

    * {
        max-height: 20rem;
        object-fit: cover;
        width: 100%;
    }

    @media screen and (min-width: 750px) {
        padding: 4rem 0.5rem;
        max-width: 750px;
        margin: auto;

        .gallery {
            display: none;
        }
    }

    @media screen and (min-width: 1200px) {
        max-width: 1200px;

        * {
            max-height: 24.5rem;
            max-width: 40rem;
        }

        .gallery {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;

            img {
                height: 12rem;
            }
        }
    }
`
