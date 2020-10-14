import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/Post'
import Header from './../components/Header'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
      </Head>
      <Header></Header>
      <div class="posts">
        {posts.length > 0
          ? posts.map(p => (
              <Post
                alt={p.fields.alt}
                date={p.fields.date}
                key={p.fields.title}
                image={p.fields.image}
                title={p.fields.title}
                url={p.fields.url}
              />
            ))
          : null}
      </div>
    </>
  )
}

export default HomePage
