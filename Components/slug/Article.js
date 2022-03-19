import * as S from '../../public/assets/styles/Slug'
export default function Article({content}){

    return(
      <S.Article>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </S.Article>
    )
}