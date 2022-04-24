import * as S from '../../public/assets/styles/ToggleTheme.style'
import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md'
export default function ToggleTheme(props){
    return(
        <S.ToggleButton>
            {props.theme==='dark'?<MdOutlineLightMode onClick={props.changeTheme}/>:<MdOutlineDarkMode onClick={props.changeTheme}/>}
        </S.ToggleButton>
    )
}