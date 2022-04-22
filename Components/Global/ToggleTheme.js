import * as S from '../../public/assets/styles/ToggleTheme.style'
import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md'
export default function ToggleTheme(props){
    return(
        <S.ToggleButton>
            {props.theme==='dark'?<MdOutlineDarkMode onClick={props.changeTheme}/>:<MdOutlineLightMode onClick={props.changeTheme}/>}
        </S.ToggleButton>
    )
}