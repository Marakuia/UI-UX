import styled from 'styled-components';

export const Details = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    position: relative;
    font-weight: bold;
`;


export const CommentsTitle = styled.h2`
  display: flex;
  font-size: ${props=> props.theme.textSizeTitle};
  letter-spacing: 1px;
  font-weight: 700;
  color: ${props => props.theme.accentColor1};
  margin-right: 15px;
  `

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 1000px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
    z-index: 1;
    
`;
export const ContentTitle = styled.span`
    letter-spacing: 1px;
    font-weight: 700px;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    margin: 50px 0px;
    align-items: center;
    box-sizing: border-box;
    color: ${props => props.theme.textColor}
    font-size: 20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 14px;
    }
    @media (max-width: 576px)  {
        font-size: 10px;
    }
    & a{
        font-family: Roboto;
        font-size:  ${props => props.theme.textSizeTitle};
        font-weight: 500;
        letter-spacing: 1px;
        transition: 0.3s;
        &:hover{
            transition: 0.3s;
            color: ${props => props.theme.accentColor1};
        }
    }
  
`;

export const Data = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 2fr ;
    grid-gap: 20px;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){   
    }
    @media (max-width: 1200px) and (min-width: 992px)  {     
    }
    @media (max-width: 992px) and (min-width: 768px)  {     
    }
    @media (max-width: 768px) and (min-width: 576px)  {    
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.25;
`;

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

`;

export const Statistic = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap:20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr  1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr  ;
    }
`;

export const Img = styled.img`
    aspect-ratio: 1/1/5;
    display: flex;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow: 0px 3px 5px ${props=>props.theme.shadowColor};;
    margin: 0px 0px 20px 0px;
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;



export const Description = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: flex-start;
    grid-template-columns: 1fr;
    grid-gap: 20px;
`;

export const Title = styled.div`
    display: flex;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: bold;
`;

export const Year = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: bold;
    font-size: 20px;
    color: ${props=> props.theme.textColor};


`;
export const DescriptionFull = styled.div`
    display: flex;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 1px;
    font-weight: bold;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 14px;
    }
    @media (max-width: 576px)  {
        font-size: 10px;
    }

`;
export const Genres = styled.div`
    display: flex;
    font-size: 20px;
    
    font-weight: bold;
    background: rgb(50, 169, 202);
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }

    
`;

