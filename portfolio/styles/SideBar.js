import styled from 'styled-components'

export const SideButton=styled.div`
    display: flex;
   
    
`
export const Button=styled.div`

    display: none;
        @media (max-width:768px) {
            display: block;
            position: fixed;
            z-index: 999999;
            margin: 400px 320px;
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
    background-color: #171717;
    width: 20rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width:768px) {
    display:none ;
    }
`
export const SideBarMobile=styled.div`
    display: none;
    @media (max-width:768px) {    
    background-color: #171717;
    width: 20rem;
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
        color: white;
        transition: 300ms;
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
    }

`