import React from 'react'

const ArticleCard = (props) => {
  const { article } = props
  // if(!article) return <p>Article not fount</p>
  
  return (
    <div className="card">
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
    </div>
  )
}

export default ArticleCard