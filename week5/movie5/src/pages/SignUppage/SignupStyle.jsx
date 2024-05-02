import styled from "styled-components";

export const SignupContainer = styled.div`
`;

export const SignupForm = styled.div`
margin-top : 40px;
display: flex; 
justify-content: center; 
align-items: center;
`;

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;


export const Input = styled.input`
width : 500px;
height : 40px;
border-radius : 25px;
margin-bottom : 20px;
font-size : 15px;
font-family: var(--font);
color: black;
`;

export const ErrorMessage = styled.div`
color: red;
font-size : 13px;
margin-left : 10px;
margin-bottom : 13px;
`;

export const Submit = styled.button`
width : 510px;
height : 55px;
border-radius : 25px;
text-align: center;
color : black;
font-size : 18px;
font-family: var(--font);

`;

export const SignupTitle = styled.div`
color : white;
font-weight : bold;
font-size : 20px;
text-align: center;
justify-content: center;
align-items: center;
margin-top : 40px;
`;
