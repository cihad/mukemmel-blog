import Head from "next/head";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import articleStyles from '../styles/article.js'

export default function Layout(props) {
  return (
	<>
		<Head>
			<title>Mukemmel Blog</title>
			<link rel="icon" href="/favicon.ico" />
			<link className={"editor"} rel="stylesheet" type="text/css" href="https://unpkg.com/@contentarchitect/editor@0.2.x/dist/CaBlocks.css" />
			{articleStyles}
			<link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet" />
		</Head>

		<style jsx global>{`
			.container {
			  max-width: 800px;
			}

			h1, h2, h3 {
				font-family: 'Merriweather', serif;
			}
			section {
				padding: 3em 0;
			}
		`}</style>
		{props.header}
		<div className="container">
			<section>{props.children}</section>
		</div>

		<footer className={"bg-light pt-3 pb-4"}>
			<div className={"container text-center"}>
				<div className={"col"}>
					<span>Bu site <a href="https://nextjs.org/">Next.JS</a> teknolojisi kullanılarak yapıldı. Aynı zamanda açık kaynaklı. <a href="https://github.com/cihad/mukemmel-blog">Bkz.</a></span>
				</div>
			</div>
		</footer>
	</>
  );
}