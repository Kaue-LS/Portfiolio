import styled from "styled-components";

export const ToggleButton=styled.div`
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
border-radius: 100%;
opacity: 80%;
font-size: 25px;
padding: 10px 10px;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
right:20px;
top:20px;
:hover{
    opacity:1
}
`