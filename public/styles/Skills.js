import styled from "styled-components";

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius:5px ;
  box-shadow:0px 0px 10px ;
  overflow:hidden ;

  hr{
  color: #000;
  width:100% ;
  background-color:black ;
  }

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border-collapse: collapse;
  width: 50%;
  padding: 10px 10px;

  p {
    width: 100%;
    font-weight:700 ;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const Box = styled.div`
  width: 100%; /* Full width */
  background-color: #171717;
  border-radius: 20px;
  overflow:hidden ;
  border:2px solid ;
  box-shadow:0px 5px 5px gray ;

  .skills {
    text-align: right; /* Right-align text */
    padding: 10px 10px;
    color: black;
  
    font-weight:700; /* White text color */
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
`;
