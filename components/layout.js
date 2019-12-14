import Head from "next/head";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout(props) {
  return (
	<div className="container">
		<Head>
			<title>Mukemmel Blog</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<div className="hero">
			<h1 className="hero-title">Selman Kahya</h1>
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
			.container {
			max-width: 650px;
			}

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