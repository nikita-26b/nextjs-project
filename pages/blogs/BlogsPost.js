import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogsPost({ posts }) {
  return (
    <div className="blog-post">
      <h1>ALL POSTS </h1>
      {posts.data.map((element) => {
        const blogImg = element.attributes.image.data;
        return (
          <div key={element.id}>
            <h2>{element.attributes.title}</h2>
            {blogImg.map((ele) => {
              return (
                <img src={`http://localhost:1337${ele.attributes.url}`}></img>
              );
            })}
            <p>{element.attributes.description}</p>
            <p>{element.attributes.content}</p>
            <Link href="/">back to home </Link>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/posts?populate=*");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
