import styled from 'styled-components'
import { color } from '../../../../../utils/constants'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .react-calendar {
            border-radius: 0.5rem;
            border-color: lightgray;
            overflow: hidden;

            .react-calendar__tile--now {
                background-color: ${color.main};
                color: white;
                border-radius: 0.5rem;
            }

            .react-calendar__tile--active {
                background-color: ${color.accent};
            }

            .react-calendar__tile--rangeEnd {
                border-radius: 0 0.5rem 0.5rem 0;
            }
            .react-calendar__tile--rangeStart {
                border-radius: 0.5rem 0 0 0.5rem;
            }
        }
    }

    > div:first-of-type {
        display: flex;
        justify-content: space-between;
    }
`
