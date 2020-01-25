import React from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import PostView from "../components/PostView.js"
import PostPager from "../components/PostPager.js"
import Layout from "../components/Layout";
import { API_BASE } from "../src/config"

const Home = ({ posts, pages, currentPage }) => (
  <div>

    <header>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-8 pr-md-5"}>
            <h1 className={"name mb-md-4"}><strong>Merhaba ✋ yolcu</strong>,<br /> Ben Selman Kahya</h1>
            <p className={"mb-md-5"}>
              Ben bir <strong>önyüz &amp; arayüz geliştiricisi</strong>yim. Şu anda <strong>Airbnb</strong>'de çalışıyorum.
              Aynı zamanda bir 🎥 <strong>Youtube</strong> yayıncısıyım. Bu açıklamayı benim için
              yarışmacı (<a href="https://youtu.be/cHUh0FmPd3A" title="Yarışma hakkında">*</a>) arkadaş yaptı. Bu siteyi de o yaptı.
            </p>
            <div className={"social-links"}>
              <Link href="//medium.com/@selmankahya">
                <a>Medium</a>
              </Link>
              <Link href="//www.twitter.com/selmankahyax">
                <a>Twitter</a>
              </Link>
              <Link href="//www.linkedin.com/in/selmankahya">
                <a>LinkedIn</a>
              </Link>
              <Link href="//www.instagram.com/selmankahyax/?hl=en">
                <a>Instagram</a>
              </Link>
            </div>
          </div>
          <div className={"col-md-4 d-flex align-items-center"}>
            <div className={"segment d-flex align-items-center flex-column text-center"}>
              <img src="https://yt3.ggpht.com/a/AGF-l79AOJRledCZxpPXGunr1g3udtlkCay7QCNFIQ=s288-c-k-c0xffffffff-no-rj-mo" className={"rounded-circle img-fluid mb-4"} />
              <p>Youtube'da düzenli olarak canlı kodlama etkinlikleri yapıyorum.</p>
              <a href="https://www.youtube.com/user/SirChintzy" className={"btn btn-danger"}>TAKİPTE KAL</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <style jsx global>{`
      .container {
        max-width: 900px;
      }
    `}</style>

    <style jsx>{`
      header {
        border-top: 3px solid #03c;
        padding: 4em 0 3em 0;
        background-color: #0033cc0a;
      }

      .name {
      }

      .social-links > a::after {
        content: '/';
        padding: 0 .5em;
        color: black;
      }

      .social-links > a:last-child::after {
        content: ''
      }

      .segment,
      .segment::before,
      .segment::after {
        border: 1px solid rgba(50, 50, 50, .15);
        background-color: white;
        box-shadow: 0 1px 2px 0 rgba(50, 50, 50, .15);
        border-radius: .3em;
      }

      .segment {
        position: relative;
        padding: 1.4em;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .segment::before,
      .segment::after {
        content: '';
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        width: 100%;
        top: 0;
        z-index: -2;
      }

      .segment::before {
        transform: rotate(-2deg);
      }

      .segment::after {
        transform: rotate(2deg);
      }

      .segment > img {
        width: 50%;
      }

      .segment > p {
        line-height: 1.2em;
      }
    `}</style>

    <Layout>
      

        {posts.map(post => (
          <PostView post={post} page={false}></PostView>
        ))}

        <PostPager pages={pages} current={currentPage}></PostPager>
    </Layout>

  </div>
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
