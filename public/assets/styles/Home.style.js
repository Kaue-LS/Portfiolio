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
  font-size:10rem ;
  color: #ffffff60;
  border-radius:100% ;


  animation: animate 19s linear infinite;




  @keyframes animate {

0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
}

100%{
    transform: translateY(-800px) rotate(360deg);
    opacity: 0;
}

}
  :nth-child(0){
    left: 10%;
  width: 122px;
  height: 122px;
  bottom: -122px;
  animation-delay: 1s;
  }
  :nth-child(1) {
    left: 60%;
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
    left: 20%;
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
  margin: 0 0 0 auto ;
  width: 80%;
  @media(max-width:768px) {

    width:100% ;
  }
`

export const Texts=styled.div`
width: 90%;
margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

`

export const Title=styled.h1`
 font-size: 8rem;
  color: #ffffff;
  text-shadow: 0px 0px 10px  #BEBEBE ;

  @media(max-width:780px){
    font-size:4rem;

  }
`

export const SubTitle=styled.h3`
font-size: 6rem;
  color: #ffffff;
  text-shadow: 0px 0px 10px  #BEBEBE ;

  @media(max-width:780px){
    font-size:4rem;

  }
  `
export const BioArea=styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between; 
  padding :0 3rem ;
  @media(max-width:780px){
    padding:0 2rem ;
  }
  @media(max-width:480px){
    justify-content:center ;
  }
  #Title-Project{
    width:100%;
    font-weight:900 ;
    font-size:2.5rem ;
    padding:0 0px;
    text-transform:uppercase;
  }
`

export const ProjectArea=styled.section`
   width: 1000px;
   margin: 0 auto;
   overflow: hidden;
  @media(max-width:780px){
    width: 600px;
  }
  @media(max-width:480px){
    width: 300px;
    justify-content:center ;
  }
  #Title-Project{
    width:100%;
    font-weight:900 ;
    font-size:2.5rem ;
    margin:0 0 30px 65px;
    text-transform:uppercase;
    @media(max-width:480px){
      margin: 0 0 30px auto;
  }
  }

`

export const SkillsArea = styled.section`
  width: 90%;
  margin: 0 auto;
  padding:10px 50px ;
  @media(max-width:780px){
    padding: 0px 20px ;

  }
#Title-Skills{
    width:100%;
    font-weight:900 ;
    font-size:2.5rem ;
    text-transform:uppercase;
  }
`

export const Content=styled.div`
  background-color: ${(props)=>props.theme.pageBackground};
  color: ${(props)=>props.theme.titleColor};
`
export const ThemeProvider=styled.div`
  

`