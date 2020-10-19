import ActiveLink from './ActiveLink'
import style from './Header.module.scss'
import Link from 'next/link'

function Header({href, children}){
  return (
    <div className="container mx-auto">
      <ul className="flex">
        <li className="mr-6"><ActiveLink href="/">ホーム</ActiveLink></li>
        <li className="mr-6"><ActiveLink href="/about">アバウト</ActiveLink></li>
        <li className="mr-6"><ActiveLink href="/posts">ポスト</ActiveLink></li>
      </ul>
    </div>
  )
}
export default Header

