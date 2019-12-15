import React from "react";
import fetch from "isomorphic-unfetch";
import PostView from "../components/PostView.js"
import PostPager from "../components/PostPager.js"
import Layout from "../components/Layout";

const Home = ({ posts, pages, currentPage }) => (
  <Layout>
      {posts.map(post => (
        <PostView post={post} page={false}></PostView>
      ))}

      <PostPager pages={pages} current={currentPage}></PostPager>
  </Layout>
);

Home.getInitialProps = async ({ query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const page = query.page || 1

  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`);

  const data = await res.json()

  const { posts, pages, total } = data;
  return { posts, pages, total, currentPage: page };
};

export default Home;
