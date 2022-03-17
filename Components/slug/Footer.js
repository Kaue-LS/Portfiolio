import Link from 'next/link'
import * as S from '../../public/styles/Slug'
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
