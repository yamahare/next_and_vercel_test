import Link from 'next/link'
import { useRouter } from 'next/router'

function ActiveLink({href, children}){
  const router = useRouter()
  const style = {
    color: router.pathname === href ? 'red' : 'black'
  }

  return (
    <Link href={href} passHref>
      <a style={style}>{children}</a>
    </Link>
  )
}
export default ActiveLink

