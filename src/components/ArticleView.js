import React from "react";

const ArticleView = (props) => {
  const { article } = props;
  return (
    <div className="view">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleView;