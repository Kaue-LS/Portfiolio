import Link from 'next/link'
import * as S from '../../public/assets/styles/Slug.style'
export default function Footer({children}) {
  return (
    <S.Back>
      <Link href="/">
      <button>
        <a className="hover:underline">Voltar</a>
      </button>
      </Link>

    </S.Back>
  )
}
