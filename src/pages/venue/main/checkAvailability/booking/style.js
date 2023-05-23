import styled from 'styled-components'
import { color } from '../../../../../utils/constants'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    h2 {
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .react-calendar {
            border-radius: 0.5rem;
            border-color: lightgray;
            overflow: hidden;
            background-color: ${color.light};

            .react-calendar__tile--now {
                background-color: ${color.accent};
                color: white;
                opacity: 0.6;
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

        input[type='number'] {
            width: 4rem;
            padding: 0.5rem;
            outline: none;
            border: 1px solid lightgray;
            border-radius: 0.5rem;
            background-color: ${color.light};
        }
    }

    .drawer-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
