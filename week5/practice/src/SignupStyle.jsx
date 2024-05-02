import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;


export const Input = styled.input`
width : 500px;
height : 40px;
border-radius : 25px;
margin-left : 33%;
margin-bottom : 20px;
font-style: oblique;
font-size : 15px;
font-family: var(--font);
color: rgb(208, 208, 208);
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  text-align: center;
justify-content: center;
align-items: center;
`;

export const Submit = styled.button`
width : 500px;
height : 55px;
border-radius : 25px;
text-align: center;
margin-left : 33%;
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