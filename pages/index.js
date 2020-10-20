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
          <TableRow
            key={d.data.telephone}
            creditCard={d.data.creditCard.number}
            firstName={d.data.firstName}
            lastName={d.data.lastName}
            telephone={d.data.telephone}
          />
        ))
      ) : (
        <>
        </>
      )}
    </Layout>
  )
}
export default HomePage
