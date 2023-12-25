import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex; 
    width: 100%;
    min-height: 40px;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    margin: 20px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 768px) and (min-width: 576px)  {
    width: 80%;
    height: 80%;
  }
  @media (max-width: 576px)  {
    width: 60%;
    height: 60%;
  }
  
  
 
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  color: rgb(4, 44, 79);
  font-weight: 700px; 
  font-size: 30px;
  height: 100%;
  border-radius: 5px;
  padding: 0px 25px;
  box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
  box-sizing: border-box;
  transition: 0.1s;
  &:hover{
    transition: 0.1s;
    color: #1d87cf;
    background-color:${props => props.theme.accentColor1};
   
  }
  margin: 0px 10px 0px 0px;
  &:last-child{
    margin: 0px 0px 0px 0px;
  }
  @media (max-width: 768px) and (min-width: 576px)  {
    font-size: 16px;
    
  }
  @media (max-width: 576px)  {
    font-size: 14px;
    
  }
  
`;

export const ActiveItem = styled(Item)`
  color: #1d87cf;
  background-color:${props => props.theme.accentColor1};
`;