import ActiveLink from './ActiveLink'
import style from './Header.module.scss'
import Link from 'next/link'

function Header({href, children}){
  return (
    <>
      <ul className={style.ul}>
        <li className={style.li}><ActiveLink href="/">ホーム</ActiveLink></li>
        <li className={style.li}><ActiveLink href="/about">アバウト</ActiveLink></li>
        <li className={style.li}><ActiveLink href="/posts">ポスト</ActiveLink></li>
      </ul>
    </>
  )
}
export default Header

