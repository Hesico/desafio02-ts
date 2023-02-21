import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    justify-content: center;
    min-height: 93vh;
    background-color: #060D15;
    padding: 25px;
`;

export const BoxContainer = styled.div`
    height: fit-content;
    background-color:#FFFFFF;
    border-radius: 25px;
    padding: 10px 15px 10px 15px;

    h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 18px;
        color: #7A31A7;
        font-weight: 700;
    }
`;

export const Input = styled.input`
    display: block;
    height: 30px;
    padding: 5px 10px 5px 10px;
    border:none;
    border-bottom: 2px solid #7A31A7;
    margin: 10px 0 10px 0;
    width: min(500px, 80vw);
    font-size: 18px;
    
    transition: all 0.2s;

    &:focus {
        outline: 0;
        color: #7A31A7;
        transform: translateX(5px);
        box-shadow: -3px 3px 10px 0px #7A31A7;
    }
`;