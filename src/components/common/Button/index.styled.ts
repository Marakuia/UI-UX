import styled from "styled-components"

export const Button = styled.button`
    display: flex;
    border-radius: 5px;
    padding: 8px 16px;
    flex: 0 0 auto;
    width: 80px;
    height: 50px;
    margin: 0px 0px 0px 20px;
    border-style: solid;
    border-width: 1px;
    justify-content: center;
    align-items: center;
    background-color: rgb(50, 169, 202);
    
    text-rendering: auto;

    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor} ;
    color: rgb(95, 100, 102);
    &:hover{
        background-color: ${props => props.theme.accentColor1};
        color: white;
        transition: 0.1s;
    }
    &:focus{
        outline: none;   
    }
    cursor: pointer;
    transition: 0.1s;

`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-family: 'Kalam';
    font-size: 20px;
    
`;

export const Name = styled.div`  
    display: flex;
    width: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.textSizeText};
    font-weight: 600;
`;


