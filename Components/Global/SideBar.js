import * as S from '../../public/assets/styles/SideBar.style'
import { useState } from 'react'
import {AiFillCaretLeft,AiFillCaretRight} from 'react-icons/ai'
export default function SideBar({children}){
    const [open,setOpen]=useState(false)
    const OpenBar=(props)=>{
        if(props){
            setOpen(props)
            document.getElementById('MoveBar').style=`
                margin:0 0;
                transition:400ms;
            `
        }
        else{
            setOpen(props)
            document.getElementById('MoveBar').style=`
            margin:0  0 0 -16rem;
            transition:400ms;

        `

        }
    }

    return(
        <div style={{display:'flex',flexDirection:'row'}}>
        <S.SideBar>
            <S.PerfilLinks>
            <img src='https://avatars.githubusercontent.com/u/79471947?v=4' alt='Kaue-LS'/>
            <S.Links>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/kau%C3%AA-leite-8bb83320b/'><i className="fa fa-linkedin" ></i></a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/'> <i className="fa fa-github" ></i></a>
            <a target="_blank" rel="noopener noreferrer" href='mailto:kaue.ls0506@gmail.com?subject=Mail from gmail.com'> <i className="fa fa-envelope" ></i>  </a>
            </S.Links>
            </S.PerfilLinks>
            <S.Topics>
                <nav>
                <ul>
                    <a href='#Bio'><li>Bio</li></a>
                    <a href='#Projetos'><li>Projetos</li></a>
                    <a href='#Habilidades'><li>Habilidades</li></a>
                    {/* <a href='#FaleComigo'><li>Fale comigo</li></a> */}
                </ul>
                </nav>
            </S.Topics>
        </S.SideBar>
        <S.SideButton id='MoveBar'>
        <S.SideBarMobile>
            <S.PerfilLinks>
            <img src='https://avatars.githubusercontent.com/u/79471947?v=4' alt='Kaue-LS'/>
            <S.Links>
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/kau%C3%AA-leite-8bb83320b/'><i className="fa fa-linkedin" ></i></a>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/Kaue-LS'> <i className="fa fa-github" ></i></a>
            <a target="_blank" rel="noopener noreferrer" href='mailto:kaue.ls0506@gmail.com?subject=Mail from gmail.com'> <i className="fa fa-envelope" ></i>  </a>
            </S.Links>
            </S.PerfilLinks>
            <S.Topics>
                <nav>
                <ul>
                    <a href='#Bio'><li>Bio</li></a>
                    <a href='#Projetos'><li>Projetos</li></a>
                    <a href='#Habilidades'><li>Habilidades</li></a>
                    {/* <a href='#FaleComigo'><li>Fale comigo</li></a> */}
                </ul>
                </nav>
            </S.Topics>
        </S.SideBarMobile>
        <S.Button>
       <span  onClick={()=>OpenBar(!open)}> {open?<AiFillCaretLeft/>:<AiFillCaretRight/>}</span>
        </S.Button>
        </S.SideButton>
        {children}
        </div>
    )
}