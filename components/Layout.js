import Head from "next/head";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import articleStyles from '../styles/article.js'

export default function Layout(props) {
  return (
	<>
		<Head>
			<title>Selman Kahya - Harika Blog</title>
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

			.divider-line {
				display: flex;
				align-items: center;
				color: #444;
			}
			
			.divider-line::before,
			.divider-line::after {
				content: "";
				flex: 1;
				border-bottom: 1px solid #ccc;
			}
			
			.divider-line .divider {
				padding: 0 1em;
			}
			
			.divider-line .divider::before {
				content: "❧";
				margin: 0;
				letter-spacing: normal;
				font-size: 1.5em;
			}

			.alert {
				border-radius: .2em;
				padding: 10px 10px 10px 44px;
				position: relative;
				margin-top: 1em;
				margin-bottom: 1em;
			}

			.alert p:first-child,
			.alert .editable-body p:first-child {
				margin-top: 0;
			}

			.alert-info {
				border: 1px solid #add8ff;
				background-color: #ecf6ff;
			}

			.alert-info::after {
				content: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path fill="lightsteelblue" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>');
				position: absolute;
				left: 10px;
				top: 10px;
			}

			.stretch {
				margin-left: 0;
				margin-right: 0;
			}

			.narrow {
				margin-left: 150px;
				marign-right: 150px;
			}

			.bordered img {
				border: 1px solid #ccc;
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