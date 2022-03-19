import styled from 'styled-components'

export const SideButton=styled.div`
    display: flex;
   position: fixed;
   z-index:99999;
   margin:0  0 0 -20rem;
    
`
export const Button=styled.div`

    display: none;
        @media (max-width:768px) {
            display: block;
            position: fixed;
            z-index: 999999;
            margin: 250px 255px;
            button{
            
            height: 70px;
            width: 30px;
            color: #ffffff;
            background: linear-gradient(90deg,#000000 2%, #171717 );
            border: none;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            span{
                font-size: 2rem;
                font-weight: 700;
            }
        }
        }

`
export const SideBar=styled.div`
position:fixed ;
    background-color: #171717;
    height: 100%;
    display: flex;
    padding: 20px 20px;
    flex-direction: column;
    box-shadow: 0px 0px 30px;
    z-index: 999999;
    @media (max-width:768px) {
    display:none ;
    }
`
export const SideBarMobile=styled.div`
    display: none;
    @media (max-width:768px) {    
    background-color: #171717;
    width: 16rem;
    position: fixed;
    z-index: 999999;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    }
`

export const PerfilLinks=styled.div`
    margin: 20px auto;
    img{
        width: 230px;
        height: 230px;
        border: 3px solid white;
        border-radius: 100%;

        @media (max-width:768px) {    
            width: 150px;
        height: 150px;
        border: 3px solid white;
        border-radius: 100%;
    }
    }
`
export const Links=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px auto;
    i{
      
        font-size: 2rem;
        cursor: pointer;
        border-radius:100% ;
        color: white;
        transition: 400ms ease-in-out;
        :hover{
            color: #00F0FF;
        }
    }
`

export const Topics=styled.div`
    nav{
        ul{
            display: flex;
        flex-direction: column;

        }
    }
    li{
        font-weight: 700;
        font-size: 1.2rem;
        color: #ffffff;
        list-style: inside;
        margin: 15px 1rem;
        transition:400ms ;
        :hover{
            color: #00F0FF ;
        }
    }

`