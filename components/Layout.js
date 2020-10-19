import Header from './../components/Header'
import Head from 'next/head'

function Layout({ children }){
  return (
    <>
      <Head>
        <title>すごいサイトだよ</title>
      </Head>
      <Header></Header>
      <main className="container mx-auto">{ children }</main>
    </>
  )
}
export default Layout

