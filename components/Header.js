import Link from 'next/link'

function Header(){
  return (
    <>
      <ul>
        <li><Link href="/">ホーム</Link></li>
        <li><Link href="/about">アバウト</Link></li>
      </ul>
    </>
  )
}
export default Header

