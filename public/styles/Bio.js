import styled from "styled-components";

export const Bio=styled.div`

    background-color: white;
    padding: 1rem 3rem;
    
`

export const Title=styled.h1`
    text-transform: uppercase;

`
export const Paragraph=styled.div`
p{
    text-align: justify;
    line-height: 30px;
    text-indent: 60px;
    @media(max-width:780px){
        text-indent: 20px;

  }
}
`