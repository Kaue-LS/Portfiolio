import styled from 'styled-components'


export const Project =styled.div`
background-color:#ffffff;
margin: 0 30px 0 0px;
border-radius:10px ;
width: 300px;
height: 400px;
overflow:hidden ;
@media(max-width:780px){
    height:auto ;
  }
`;

export const Card=styled.div`
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items: center;
    cursor: pointer;

    div{
        overflow:hidden ;
    }
`

export const Data=styled.div`
padding:0 10px ;

`