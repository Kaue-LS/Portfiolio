import styled from "styled-components";

export const Bio=styled.div`
    
`

export const Title=styled.h1`
    text-transform: uppercase;
    font-weight:900 ;
    font-size:2.5rem ;

`
export const Paragraph=styled.article`
p{
    text-align: justify;
    line-height: 30px;
    text-indent: 60px;
    @media(max-width:780px){
        text-indent: 20px;

  }
}
`