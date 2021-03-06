import Layout from './../components/Layout'
import { useEffect, useState } from 'react'

function HomePage(){
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await fetch('/api')
      const newData = await res.json()
      setData(newData)
    }
    getData()
  }, [])

  return (
    <Layout>
      <div>ホームだよ(´ . .̫ . `)</div>
      {data.length > 0 ? (
        data.map(d => (
          <div className="m-16" key={d.ref['@ref'].id}>
            <p>{d.data.title}</p>
          </div>
        ))
      ) : (
        <>
        </>
      )}
    </Layout>
  )
}
export default HomePage
