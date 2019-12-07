import React from "react";
import fetch from "isomorphic-unfetch";
import Post from "../../components/post.js"
import Layout from "../../components/Layout";

const New = ({ posts }) => (
  <Layout>
      
  </Layout>
);

New.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default New;
