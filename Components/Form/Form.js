import * as S from '../../public/assets/styles/Form.style'
export default function Form(){
    return(
        <S.Form>
            <form>
                <input placeholder="Seu nome"/>
                <input placeholder="Seu email"/>
                <textarea placeholder="Assunto"/>
                <button>Enviar</button>
            </form>
        </S.Form>
    )
}