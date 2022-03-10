import Link from 'next/link'
import * as S from '../../public/styles/Slug'
export default function Header({children}) {
  return (
    <S.Back>
      <Link href="/">
        <a className="hover:underline">Voltar</a>
      </Link>
      
    </S.Back>
  )
}
