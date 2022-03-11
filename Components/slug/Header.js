import * as S from '../../public/styles/Slug'
import Link from 'next/link'

export default function Footer({post}) {
  return (
    <S.Header>
         <Link href="/">
        <a className="hover:underline">Voltar</a>
      </Link>
        <h1>{post}</h1>
       
    </S.Header>
  )
}
