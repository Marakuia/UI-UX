import styled from 'styled-components';

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-bottom: 100px;
`

export const Comment = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  padding: 20px 20px;
  flex-direction: column;
  gap: 15px;
  
  position: relative;
  @media (max-width: 576px)  {
    padding: 0px 40px;
    margin: 0px 0px;
    width: 100%;
}
`

export const Img = styled.img`
    
    
    height: 50px;
    width: 50px;
    padding: 0px 250px;
   
`;

export const Title = styled.span`
    display: flex;
    text-align-last: center;
    
    font-size: 20px;
    font-weight: 600px;
    font-family: Kalam, cursive;
    letter-spacing: 1px;
    margin: auto;
    padding: 0px 200px;
    
    
`;

export const NoComment = styled.div`
      
    display: flex;
    padding: 20px 200px;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 576px)  {
      padding: 0px 40px;
      margin: 0px 0px;
      width: 100%;
  }

    
`;

export const Text = styled.span`
  
  letter-spacing: 1px;
  font-weight: 200px;
  font-family: 'Kalam';
  text-transform: capitalize;
  padding: 0px 50px;
  margin: 0;
`
export const Name = styled.p`
 
  letter-spacing: 1px;
  font-weight: 600;
  
  text-transform: capitalize;
  padding: 0;
  margin: 0;
`

export const User = styled.div`

    display: flex;
    gap: 10px;
    align-items: center;
`

export const MainImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  gap:15px;
  @media (max-width: 576px)  {
    
    padding: 0px 50px;
    
    width: 100%;
}
  
`
export const Input = styled.textarea`
  border-radius: 10px;
  min-height: 60px;
  max-width: 100%;
  min-width: -webkit-fill-available;
  max-height: 1200px;
  
  letter-spacing: 1px;
  font-weight: 400;
  font-family: 'Kalam';
  font-size: 18px;

  text-transform: capitalize;
  padding: 20px;
  margin: 0;
  background: rgb(140, 191, 220);
  box-shadow: 0px 0px 5px ${props => props.theme.shadowColor} ;
  
`



export const DeleteButton = styled.button`
  width: 50px;
  height: 40px;
  color: red;
  background: inherit;
  border-radius: 15px;
  font-family: 'Kalam';
  
  border: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  &:hover {
    text-decoration: underline;
  }
`