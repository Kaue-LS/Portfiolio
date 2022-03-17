import styled from "styled-components";

export const Background=styled.ul`
    position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #2e2e2e;
  overflow: hidden;

  li{
    position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 19s linear infinite;
  @keyframes animate {

0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
}

100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
}

}
  :nth-child(0){
    left: 7%;
  width: 122px;
  height: 122px;
  bottom: -122px;
  animation-delay: 1s;
  }
  :nth-child(1) {
    left: 77%;
  width: 160px;
  height: 160px;
  bottom: -160px;
  animation-delay: 3s;
  }
  :nth-child(2) {
    left: 64%;
  width: 141px;
  height: 141px;
  bottom: -141px;
  animation-delay: 7s;
  }
  :nth-child(3) {
    left: 70%;
  width: 188px;
  height: 188px;
  bottom: -188px;
  animation-delay: 8s;
  }
  :nth-child(4) {
    left: 54%;
  width: 155px;
  height: 155px;
  bottom: -155px;
  animation-delay: 1s;
  }
  :nth-child(5) {
    left: 4%;
  width: 194px;
  height: 194px;
  bottom: -194px;
  animation-delay: 9s;
  }
  :nth-child(6) {
    left: 82%;
  width: 196px;
  height: 196px;
  bottom: -196px;
  animation-delay: 27s;
  }
  :nth-child(7) {
    left: 8%;
  width: 130px;
  height: 130px;
  bottom: -130px;
  animation-delay: 21s;
  }
  :nth-child(8) {
    left: 80%;
  width: 120px;
  height: 120px;
  bottom: -120px;
  animation-delay: 22s;
  }
  :nth-child(9) {
    left: 32%;
  width: 183px;
  height: 183px;
  bottom: -183px;
  animation-delay: 6s;
  }
  }

  
  `


export const Main=styled.main`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  margin: 0 0 0 auto;
  width: 80%;
  @media(max-width:760px) {

    width:100% ;
  }
`

export const Texts=styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  
`

export const Title=styled.h1`
 font-size: 8rem;
  color: #ffffff;
  @media(max-width:780px){
    font-size:4rem;

  }
`

export const SubTitle=styled.h3`
font-size: 6rem;
  color: #ffffff;
  @media(max-width:780px){
    font-size:4rem;

  }
  `
export const ProjectArea=styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;  

  #Title-Project{
    width:100%;
    padding:0 50px;
    text-transform:uppercase;
  }

`

export const SkillsArea = styled.div`
  background-color: white;
  padding:10px 50px ;
  @media(max-width:780px){
    padding: 0px 20px ;

  }
#Title-Skills{
    width:100%;
    text-transform:uppercase;
  }
`