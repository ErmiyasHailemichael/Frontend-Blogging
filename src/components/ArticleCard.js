import React from 'react'

const ArticleCard = (props) => {
  const { title } = props
  // if(!article) return <p>Article not fount</p>
  console.log(title)
  return (
    <div className="card">
        {/* <h2>{article.title}</h2>
        <p>{article.summary}</p> */}
    </div>
  )
}

export default ArticleCard