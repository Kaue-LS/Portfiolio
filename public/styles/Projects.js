import styled from 'styled-components'


export const Project =styled.div`
background-color:#ffffff;
width:25rem ;
height:30rem ;
box-shadow: 0px 0px 10px ;
border-radius:10px ;
overflow:hidden ;
margin:20px 0 ;
@media(max-width:780px){
    width:20rem ;
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