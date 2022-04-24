import styled from 'styled-components'


export const Project =styled.div`
background-color:${(props)=>props.theme.pageBackground};
box-shadow: 0px 0px 10px ${(props)=>props.theme.titleColor};
border-radius:10px ;
z-index: 999999;
width: 300px;
height: 400px;
margin:0 20px ;
overflow:hidden ;


@media(max-width:780px){
    box-shadow: none;
    border: 2px solid black;
    height:400px ;
margin:0 5px;
  }
  @media(max-width:480px){
    margin: 0 20px;
    
    box-shadow: none;
    border: 2px solid ${(props)=>props.theme.titleColor} ;
    height:400px ;
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