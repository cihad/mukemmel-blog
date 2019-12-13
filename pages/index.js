import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import PostView from "../components/post.js"
import Layout from "../components/Layout";

const Home = ({ posts }) => (
  <Layout>
      {posts.map(post => (
        <PostView post={post}></PostView>
      ))}
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
