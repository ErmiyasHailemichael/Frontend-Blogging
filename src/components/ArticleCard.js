import React from 'react'

const ArticleCard = (props) => {
  const { article } = props
  return (
    <div className="card">
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
    </div>
  )
}

export default ArticleCard