export default <style className={"editor"} jsx={true}>{`
	[data-block] {
		margin: 0 100px;
	}

	[data-block=Header] {
		margin-top: 2em;
		margin-bottom: 1em;
	}

	[data-block=Image] {
		margin: 2em 0;
	}

	[data-block=Image] figcaption {
		margin-top: .5em;
		text-align: center;
		font-style: italic;
	}

	[data-block=Code] {
		position: relative;
	}

	[data-block=Code] pre {
		border-radius: 6px;
	}

	[data-block=Code]::before {
		content: attr(data-language);
		position: absolute;
		right: 10px;
		top: 10px;
		border-radius: 3px;
		background-color: #00000033;
		color: gray;
		z-index: 1;
		padding: 0 1em;
		font-size: .8em;
		text-transform: uppercase;
	}

	[data-block=Quote] blockquote {
		margin: 0 40px 0;
	}
`}</style>
