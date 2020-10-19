function Post({ alt, date, image, title, url }) {
  return (
    <a className="max-w-sm rounded shadow-lg overflow-hidden" href={url}>
      <img className="w-full" alt={alt} src={image} />
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">{title}</p>
        <h4>{date}</h4>
      </div>
    </a>
  )
}

export default Post
