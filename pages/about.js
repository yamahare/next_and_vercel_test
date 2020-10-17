import useSWR from 'swr'
import Button from './../components/Button'
import Header from './../components/Header'

const fetcher = (url) => fetch(url).then((res)=>res.json())

function HomePage(){
  const { data, error } = useSWR('/api/hello', fetcher)
  console.log(data)

  if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  return (
    <>
      <Header></Header>
      <div>aboutだよおおおおおお</div>
      <Button></Button>
      <div>{data ? data.name : 'loading...'}</div>
    </>
  )
}

export default HomePage

