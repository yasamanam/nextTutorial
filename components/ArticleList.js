import Article from "./Article";
import React from "react";
import styles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
