import styled from "styled-components";

export const Banner = styled.div`
height: 250px;
margin: 0 auto;
padding: 32px 0;
background-color: black;
`;

export const MainMiddle = styled.div`
margin-top: 110px;
color: white;
font-size: 30px;
text-align: center;
justify-content: center;
align-items: center;
`;

export const MainBottom = styled.div`
color : white;
font-size : 45px;
font-weight: bold;
margin-top : 210px;
text-align: center;
justify-content: center;
align-items: center;
`;

export const SearchBox = styled.input`
width : 400px;
height : 40px;
border-radius : 18px;
margin-left : 528px;
padding-left : 15px;
`;

export const Boxcontainer = styled.div`
margin-top : 30px;
display : flex;
justify-content: space-between;
`;

export const Icon = styled.div`
position : absolute;
margin-left : 65%;
`;

export const MovieResult = styled.div`
width : 200px;
height: 350px;
font-size : 12px;
background-color: rgb(97, 95, 118);
border-radius : 7px;
`;

export const MovieTitle = styled.div`
color : white;
`;

export const MovieImg = styled.div`

`;

export const Vote = styled.div`

`;

export const MovieInfo = styled.div`
display : flex;
justify-content: space-between;
margin: 10px;
`;

export const ResultContainer = styled.div`
width : 1000px;
display : flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color: rgb(29, 24, 87);
border-radius : 10px;
margin-left : 215px;
margin-top : 30px;
gap: 20px;
padding : 20px;
max-height : 500px;
overflow-y: auto;
`;