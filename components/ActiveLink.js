import Link from 'next/link'
import { useRouter } from 'next/router'

function ActiveLink({href, children}){
  const router = useRouter()
  const classNames = router.pathname === href ? 'text-blue-500' : 'text-gray-500'

  return (
    <Link href={href} passHref>
      <a className={classNames}>{children}</a>
    </Link>
  )
}
export default ActiveLink

