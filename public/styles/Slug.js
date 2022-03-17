import styled from 'styled-components'


export const Slug=styled.div`
    width:80% ;
    margin:0rem auto;
    padding:20px 20px ;

    @media(max-width:780px){
        width:90%

    }
`

export const Back=styled.div`
border-bottom-left-radius:10px ;
border-bottom-right-radius:10px ;

background-color: white;
    padding:15px 30px ;
    color:white;
    font-size:1.5rem;
    font-weight:700;
    width:100% ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    button{
        background-color: #121212 ;
        margin: 0 auto ;
        padding: 10px 10px ;
        width:50% ;
        border:none;
        font-weight:700 ;
        transition:400ms linear;

        :hover{
            background-color:#00F0FF ;
            border-radius:10px;
            color:black;
        }
    }
    a{
        color: #ffffff;
        font-size:1.4rem;
      
    }
 
`

export const Header=styled.div`
    background-color: #121212 ;
    padding:10px 10px ;
    color:white;
    background-color:white ;
    border-top-left-radius:10px ;
border-top-right-radius:10px ;
    font-weight:700;
    display:flex ;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    h1{
        text-transform:uppercase ;
        color: #000;
        font-size:4rem ;
        margin:  0px auto;
    }

    @media(max-width:780px){
        padding:10px 20px ;
        h1{
            margin:10px auto ;
        }
    }

`
export const Post=styled.div`
    background-color:#ffffff ;
    display:flex ;
    flex-direction:column;
    justify-content:center;
    align-items:center;


`

export const Image=styled.div`
    overflow:hidden;
    background-color:#f4f4f4;
    width:95%;
    display:flex ;
    justify-content:center;
`

export const Data=styled.div`
    margin:0 0 0 0;
    padding:10px 30px ;
    width:100% ;
    div{
        display:flex ;
        flex-direction:row;
        flex-wrap:wrap ;
        align-items:center ;
    }
    p{
        font-size:1.5rem ;
    }
    span{
        font-weight:700 ;
        margin:0 0px 0 20px;
        font-size:1.3rem ;
    }
    a{
        text-decoration:underline ;
        margin: 0 0px 0 20px;
        font-size:1.5rem ;
        font-weight:700 ;
    }
`
export const Article=styled.article`
    padding:10px 2rem ;
    text-align:justify;
    @media(max-width:780px){
        padding:15px 15px ;

    }
`

