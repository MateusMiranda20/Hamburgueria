import styled from "styled-components";

export const Button = styled.button`
    margin-top: 20px;
    padding: 14px;
    border: none;
    background-color: #fb0000;
    text-align: center;
    color: black;
    cursor: pointer;

    &:active{
        opacity: 0.3;
    }

    &:hover{
        opacity: 0.6;
    }
`

export default Button