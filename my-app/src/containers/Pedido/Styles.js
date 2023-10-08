import styled from "styled-components";

export const Container = styled.div`
    background: #000;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 896px;
`

export const H1 = styled.h1`
    color: #fff;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 29px;
    line-height: 32px;
    text-align: center;
`

export const ContainetIntens = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px ;
    min-height: 600px;
`

export const Image = styled.img`
    margin-top: 10px;
    width: 9rem;
` 

export const User = styled.li` 
    display: flex;
    justify-content: space-between;
    padding-left: 27px;
    padding-right: 17px;
    align-items: center;
    height: 101px;
    width: 342px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;  
    border: none;
    outline: none;
    margin-bottom: 16px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    gap: 30px;
   
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1px 6px;
        gap: 39px;
    }

    button{
        z-index: 1;
        background-color: transparent;
    }
    
    img{
        cursor: pointer;
    }

`;

export const Psnack = styled.p`
    color: #ffff;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: 0px;
`
export const Pname = styled.p`
    color: #ffff;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: 0px;
    font-weight: 700;
`
