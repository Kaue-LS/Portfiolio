import styled from 'styled-components'


export const Slug=styled.div`
    width:80% ;
    margin:4rem auto;

    @media(max-width:780px){
        width:90%

    }
`

export const Back=styled.div`
    background-color: #121212 ;
    margin: 1rem auto 0rem auto;
    border:2px solid #ffffff;
    padding:15px 10px ;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    color:white;
    font-size:1.5rem;
    font-weight:700;
    a{
        border:1px solid white;
        padding:10px 10px ;
        font-size:1.4rem;
        transition:400ms linear;
        :hover{
            background-color:#00F0FF ;
            border-radius:10px;
            color:black;
        }
    }
 
`

export const Header=styled.div`
    background-color: #121212 ;
    margin: 0rem auto 1rem auto;
    border:2px solid #ffffff;
    padding:10px 10px ;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    color:white;
    font-weight:700;
    display:flex ;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    a{
        border:1px solid white;
        padding:10px 10px ;
        font-size:1.4rem;
        transition:400ms linear;
        :hover{
            background-color:#00F0FF ;
            border-radius:10px;
            color:black;
        }
    }
    h1{
        margin:  0px 0rem 0 20rem;
    }

    @media(max-width:780px){
        padding:10px 20px ;
        flex-direction:column;
        justify-content:center;
    align-items:center;
    h1{
        text-align:center;
    }
    }

`
export const Post=styled.div`
    background-color:#ffffff ;
    display:flex ;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:2px solid #ffffff;


`

export const Image=styled.div`
    overflow:hidden;
    background-color:#f4f4f4;
    width:100%;
    display:flex ;
    justify-content:center;
`

export const Data=styled.div`
    margin:0 0 0 0;
    width:85% ;
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
    padding:10px 5rem ;
    text-align:justify;
    @media(max-width:780px){
        padding:15px 15px ;

    }
`

