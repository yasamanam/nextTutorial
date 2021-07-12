import Link from "next/link";
import React from "react";
import styles from "../styles/Article.module.css";

const Article = ({ article }) => {
  return (
    <Link key={article.id} href="/article/[id]" as={`/article/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default Article;
