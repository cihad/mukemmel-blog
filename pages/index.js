import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import ShortPostView from "../components/ShortPostView.js"
import PostPager from "../components/PostPager.js"
import Layout from "../components/Layout";
import Header from "../components/Header";
import { API_BASE } from "../src/config"

const Home = ({ posts, pages, currentPage }) => (
  <Layout header={<Header />}>
      <h2 className={"mb-3 mb-sm-4 mb-md-5"}>Yazılarım ❧</h2>

      {posts.map(post => (
        <ShortPostView post={post} key={post.id}></ShortPostView>
      ))}

      <PostPager pages={pages} current={currentPage}></PostPager>
  </Layout>
);

Home.getInitialProps = async ({ query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const page = query.page || 1

  const res = await fetch(`${API_BASE}/posts?page=${page}`);

  const data = await res.json()

  const { posts, pages, total } = data;
  return { posts, pages, total, currentPage: page };
};

export default Home;
