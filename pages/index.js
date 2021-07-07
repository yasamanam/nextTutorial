import ArticleList from "../components/ArticleList";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <h1>Welcome to Next</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
