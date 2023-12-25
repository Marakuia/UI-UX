import styled from "styled-components"
export const Card2 = styled.div`
    position: absolute;
    aspect-ratio: 1/1/5;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    padding: 20px;
    color: white; 
`;

export const Rating = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 30%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const Img = styled.img`
    height: 40;
    width: 45px;
    @media (max-width: 768px) and (min-width: 576px)  {
        width: 35px;
        height: 40px;
    }
    @media (max-width: 576px)  {
        width: 30px;
        height: 35px;
    }
`;
export const RatingIcon = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 40px;
    heigth: 60px;
    align-items: center;
    justify-content: center;
    
    color:  ${props=> props.theme.accentColor1};
    
   
`;
export const RatingText = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    
    align-items: center;
    justify-content: center;
    font-size: ${props=> props.theme.textSize};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 16px;
    }
    @media (max-width: 576px)  {
        font-size: 14px;
    }
`;

export const Genres = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GenresText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 16px;
    }
    @media (max-width: 576px)  {
        font-size: 14px;
    }
`;

export const Details = styled.button`
    cursor: pointer;
    border: 0;
    width: 100%;
    margin: 10px 0px;
    height: 40px;
    flex: 0 0 auto;
    border-radius: 10px;
    background-color:  rgba(60, 201, 240, 0.7);
    color: black;

  
    font-size: ${props=> props.theme.textSize};
    font-weight: 600;
    &:hover{
        background-color: rgb(60, 201, 240);
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        height: 20px;
        font-size:10px
        margin: 15px 0px;
    }
    @media (max-width: 576px)  {
        height: 10px
        font-size: 8px
        margin: 50px 0px;
    }
`;

export const Film = styled.div`
    cursor: pointer;
    display: flex;  
    flex-direction:column ;
    background-color: ${props => props.theme.iconColor};
    width: 100%;
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    border-radius:10px;
    overflow: hidden;
    transition: all 0.3s ease;
    &:hover{
        box-shadow: 0px 0px 5px ${props => props.theme.accentColor1};
        transition: all 0.3s ease;
        & ${Card2}{
            transition: 0.3s;
            opacity: 1;
            pointer-events: all;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Cards = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    backgroundColor: "#ADD8E6",
`;

export const Card1 = styled.img` 
    aspect-ratio: 1/1/5;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    backgroundColor: "#ADD8E6",
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Name = styled.div`
    flex: 0 0 auto;
    flex-wrap: nowrap;
    width: 100%;
    font-size: ${props => props.theme.textSizeText};
    letter-spacing: 1px;
    overflow: hidden;
    margin: 10px 0px 0px 0px;
    padding: 0px 10px;
    box-sizing: border-box;
    text-overflow: ellipsis;   
    white-space: nowrap;
    font-weight: 600;
    textColor: ${props => props.theme.textColor}
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 14px;
    }
    @media (max-width: 576px)  {
        font-size: 8px;
    }
    
`;

export const Text = styled.div`
    margin: 10px 0px 10px 0px;
    padding: 0px 10px;
    display:flex;
    flex: 0 0 auto;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    width: 100%;
    font-weight: 2000;
    font-size: ${props => props.theme.textSizeText};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 14px;
    }
    @media (max-width: 576px)  {
        font-size: 8px;
    }
`;



