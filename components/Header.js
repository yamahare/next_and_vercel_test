import style from './Header.module.scss'
import Link from 'next/link'

function Header(){
  return (
    <ul className={style.ul}>
      <li className={style.li}><Link href="/">ホーム</Link></li>
      <li className={style.li}><Link href="/about">アバウト</Link></li>
      <li className={style.li}><Link href="/posts">ポスト</Link></li>
    </ul>
  )
}
export default Header

