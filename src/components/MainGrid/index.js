import styled from 'styled-components';

export const MainGrid = styled.main`
width: 100%;
max-width: 500px;
grid-gap: 10px;
margin: 0 auto 0 auto;
padding: 16px;
.profileArea{
  display: none;
  @media( min-width: 860px){
    display: block;
  }
}
@media( min-width: 860px){
  display: grid;
  grid-template-areas: "profile welcomeArea profileRelationsArea";
  grid-template-columns: 160px 1fr 312px;
  max-width: 1110px;
}
`;
