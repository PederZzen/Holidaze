import styled from "styled-components";
import { color } from "../../../../utils/constants";

export const Wrapper = styled.div `
    padding: 3rem .5rem;
    background-color: ${color.light};
    border-radius: 2rem;
    position: relative;
    top: -2rem;
    
    h1 {
        font-size: 1.2rem;
        margin-bottom: .7rem;
    }

    >div {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

    
        // Price
    
        >p {
            font-size: 1rem;
            font-weight: 700;
    
            span {
                font-weight: 500;
            }
        } 
    }
    
`