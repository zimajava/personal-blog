import React from "react"

const Article = ({
  content: {
    title,
    text,
    banner: {
      file: { url },
    },
    publishedAt,
  },
}) => {
  const qwe = JSON.parse(text.text)
  return (
    <div>
      <h2>{title}</h2>
      <img src={url} alt={title} />
      <p>{qwe.content[0].content[0].value}</p>
      <h5>{publishedAt}</h5>
    </div>
  )
}

export default Article
