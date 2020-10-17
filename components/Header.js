import ActiveLink from './ActiveLink'

function Header({href, children}){
  return (
    <>
      <ul>
        <li><ActiveLink href="/">ホーム</ActiveLink></li>
        <li><ActiveLink href="/about">アバウト</ActiveLink></li>
        <li><ActiveLink href="/posts">ポスト</ActiveLink></li>
      </ul>
    </>
  )
}
export default Header

