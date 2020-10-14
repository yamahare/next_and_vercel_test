function Post({ alt, date, image, title, url }) {
  return (
    <div className="postCards">
      <div className="text">
        <h2>{title}</h2>
        <h4>{date}</h4>
      </div>
      <a href={url}>
        <img alt={alt} src={image} />
      </a>

      <style jsx>{`
        .postCards {
          cursor: pointer;
          height: 300px;
          width: 300px;
          margin: 16px;
          border: 1px solid black;
          border-radius: 16px;
        }
        .postCards:hover {
          background-color: red;
        }
        .postCards img{
          width: 150px;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        h2 {
          color: black;
          font-size: 24px;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}

export default Post
