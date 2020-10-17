import Header from './../components/Header'
import Head from 'next/head'

function Layout({ children }){
  return (
    <>
      <Head>
        <title>すごいサイトだよ</title>
      </Head>
      <Header></Header>
      <main>{ children }</main>
    </>
  )
}
export default Layout

