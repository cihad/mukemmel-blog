import Head from "next/head";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import articleStyles from '../styles/article.js'

export default function Layout(props) {
  return (
	<div className="container">
		<Head>
			<title>Mukemmel Blog</title>
			<link rel="icon" href="/favicon.ico" />
			<link class="editor" rel="stylesheet" type="text/css" href="https://unpkg.com/@contentarchitect/editor@0.2.23/dist/CaBlocks.css" />
			{articleStyles}
		</Head>

		<div className="hero">
			<h1 className="hero-title">
				<Link href="/">Selman Kahya</Link>
			</h1>
			<div className="hero-social-links">
			<Link href="//medium.com/@selmankahya">
				<a className="social-link">Medium</a>
			</Link>
			<Link href="//www.twitter.com/selmankahyax">
				<a className="social-link">Twitter</a>
			</Link>
			<Link href="//www.linkedin.com/in/selmankahya">
				<a className="social-link">LinkedIn</a>
			</Link>
			<Link href="//www.instagram.com/selmankahyax/?hl=en">
				<a className="social-link">Instagram</a>
			</Link>
			</div>
		</div>

		<section>{props.children}</section>

		<style jsx>{`
			.hero {
				text-align: center;
				margin: 96px 0;
			}

			.social-link {
				margin-right: 8px;
			}

			.hero-title {
				font-size: 48px;
			}
		`}</style>
	</div>
  );
}