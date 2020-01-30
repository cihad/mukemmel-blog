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
			html, body, #__next {
				height: 100%;
				width: 100%;
			}

			#__next {
				display: flex;
				flex-direction: column;
			}
			
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

		<style className={"editor"} dangerouslySetInnerHTML={{__html: `
			.drop-cap .editable-body:not(:focus) > p:first-child:first-letter,
			.drop-cap > p:first-child:first-letter {
				float: left;
				font-size: 3em;
				line-height: 1em;
				margin-right: .1em;
			}

			.beauty-list ol {
				margin: 0;
				padding: 0;
			}
			
			.beauty-list ol {
				list-style-type: none;
			}
			
			.beauty-list ol li {
				counter-increment: myCounter;
				margin: 0 0 1em;
				padding: 20px 20px 20px 60px;
				background-color: #dadaff;
				border-radius: .2em;
				position: relative;
			}
			
			.beauty-list ol li > b:first-child,
			.beauty-list ol li > strong:first-child {
				display: block;
				margin-bottom: .5em;
			}
			
			.beauty-list ol li::before {
				content: counter(myCounter);
				color: white;
				position: absolute;
				top: 17px;
				left: 15px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				background-color: #5b5bdc;
				width: 30px;
				height: 30px;
				text-align: center;
				font-weight: bold;
			}
		` }} />	

		{props.header}
		<div className="container flex-grow-1">
			<section className="py-3 py-sm-4 py-md-5">{props.children}</section>
		</div>

		<footer className={"bg-light py-3 py-sm-5 mt-4 mt-sm-5"}>
			<div className={"container text-center"}>
				<div className={"col"}>
					<span>Bu site <a href="https://nextjs.org/">Next.JS</a> teknolojisi kullanılarak yapıldı. Aynı zamanda açık kaynaklı. <a href="https://github.com/cihad/mukemmel-blog">Bkz.</a></span>
				</div>
			</div>
		</footer>
	</>
  );
}