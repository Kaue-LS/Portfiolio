import * as S from '../../public/styles/Slug'
import Link from 'next/link'

export default function Footer({post}) {
  return (
    <S.Header>
        <h1>{post}</h1>
       
    </S.Header>
  )
}
