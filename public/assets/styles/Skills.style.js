import styled from "styled-components";

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center ;
  flex-wrap:wrap ;
  border-radius:5px ;
  box-shadow:0px 0px 10px ;
  overflow:hidden ;



`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 50%;
  padding: 10px 10px;
  label {
    width: 100%;
    font-weight:700 ;
  }

  @media (max-width: 780px) {
    justify-content:space-between ;
  }
`;

export const Box = styled.div`
  width: 100%; /* Full width */
  background-color: #171717;
  border-radius: 20px;
  overflow:hidden ;
  border:2px solid ;
  box-shadow:0px 5px 5px gray ;

 
  div{
    width: ${(props)=>props.width};
    background-color: #00f0ff;
    text-align: right;
    padding: 5px 5px;

    span {
    text-align: right; /* Right-align text */
    color: black;
    padding: 10px 10px;

    font-weight:700; /* White text color */
  }
  }
  .html {
    width: 80%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
  .css {
    width: 80%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
  .javascript {
    width: 60%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
  .react {
    width: 50%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
  .styledcomponents {
    width: 50%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
  .scss {
    width: 50%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
  .restapi {
    width: 70%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
  .axios {
    width: 50%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
  .node {
    width: 30%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
  .contextapi {
    width: 30%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
    .mongodb {
    width: 50%;
    background-color: #00f0ff;
    box-shadow:0px 0px 10px  #00f0ff ;
    border-radius: 20px;
  }
`;
