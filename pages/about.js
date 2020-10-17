import useSWR from 'swr'
import Layout from './../components/Layout'
import Button from './../components/Button'

const fetcher = (url) => fetch(url).then((res)=>res.json())

function HomePage(){
  const { data, error } = useSWR('/api/hello', fetcher)
  console.log(data)

  if (error) return <div>failed to load</div>

  return (
    <Layout>
      <div>aboutだよおおおおおお</div>
      <Button></Button>
      <div>{data ? data.name : 'loading...'}</div>
    </Layout>
  )
}

export default HomePage

