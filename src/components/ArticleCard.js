import React from 'react'

const ArticleCard = ({ article }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{article.title}</h3>
        <p className="card-body">{article.summary}</p>
      </div>
    </div>
  )
}

export default ArticleCard