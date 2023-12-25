import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    min-height: 100px;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor};
    box-shadow: 0px 0px 5px ${props => props.theme.accentColor1};
    backgroundcolor: ${props => props.theme.bachgroundColor1},
    top: 0;
    position: sticky;
    overflow: hidden;
    z-index: 50;
   
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    backgroundcolor:  ${props => props.theme.bachgroundColor};
    box-sizing: border-box;
`;

export const Logo = styled.div`
    display: flex;
    width: 100%;
    flex: 1 1 auto; 
    flex-direction: column;
    align-items: flex-start;
    margin: 5px 0px;
`;

export const Img = styled.img`
    display: flex;
    height: 50px;
`;
export const Name = styled.span`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600px;
    font-family: Kalam, cursive;
    letter-spacing: 1px;
    margin: 5px 0px 0px 0px;
    
    
`;


