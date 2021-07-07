import React from "react";
import { useRouter } from "next/router";

const article = ({ article }) => {
  return (
    <div>
      <h3>This is an article {article.title}</h3>
      <p>{article.body}</p>
    </div>
  );
};

export default article;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
