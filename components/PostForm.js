import React from "react";
import fetch from "isomorphic-unfetch";
import Router from "next/router"
import { API_BASE } from "../src/config"

// https://github.com/facebook/react/issues/10135#issuecomment-500929024
function setReactInputValue(input, value) {
	const previousValue = input.value;
	// eslint-disable-next-line no-param-reassign
	input.value = value;
	const tracker = input._valueTracker;
	if (tracker) {
	  tracker.setValue(previousValue);
	}

	// 'change' instead of 'input', see https://github.com/facebook/react/issues/11488#issuecomment-381590324
	input.dispatchEvent(new Event('change', { bubbles: true }));
}

class PostForm extends React.Component {
	static async getInitialProps({ query }) {
		if (query.id) {
			const res = await fetch(`${API_BASE}/posts/${query.id}`);
			const json = await res.json()
			return { post: json.post };
		} else {
			return {}
		}
	}

	constructor (props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.editor = React.createRef();
		this.body = React.createRef();
		const { title, body } = props.post
		this.state  = { title, body }
	}

	async onSubmit (e) {
		e.preventDefault()
		const persistedId = this.props.post ? this.props.post.id : undefined

		try {
			const response = await fetch(persistedId ? `${API_BASE}/posts/${persistedId}` : `${API_BASE}/posts`, {
				method: persistedId ? 'put' : 'post',
				body: JSON.stringify(this.state),
				headers: {
					'content-type': 'application/json'
				},
			})

			const { post } = await response.json();
			
			Router.push(`/posts/${persistedId || post.id}`)
		} catch (error) {
			console.error('Error:', error);
		}
	}

	onChange (e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	// validate (values) {
	// 	const errors = {};
							
	// 	if (!values.title) {
	// 		errors.title = 'Gerekli';
	// 	}
		
	// 	return errors;
	// }

	componentDidMount () {
		const _this = this;
		this.editor.current.addEventListener("change", val => {
			_this.setState({
				body: val.detail[0]
			})
		})
	}
	
	render () {
		return (
			<>
				<script src="https://unpkg.com/vue"></script>
				<script src="https://unpkg.com/@contentarchitect/editor@0.2.x/dist/CaCore.umd.js"></script>
				<script src="https://unpkg.com/@contentarchitect/editor@0.2.x/dist/CaEditor.umd.js"></script>
				<script src="https://unpkg.com/@contentarchitect/editor@0.2.x/dist/CaBlocks.umd.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-core.min.js"></script>
				<script src="https://prismjs.com/components/prism-markup.js"></script>
				<script src="https://prismjs.com/components/prism-clike.js"></script>
				<script src="https://prismjs.com/components/prism-javascript.js"></script>
				<script src="https://prismjs.com/components/prism-css.js"></script>

				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label htmlFor="title">Başlık</label>
						<input
							id="title"
							name="title"
							type="text"
							className={"form-control"}
							value={this.state.title}
							onChange={this.onChange}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="body">İçerik</label>
						<content-architect
							class="border rounded p-2"
							block-styles=".editor"
							ref={this.editor}
							value={
								this.state.body
									? this.state.body
									: '<div data-block="Wysiwyg"><p>Harika blog yazım...</p></div>'
							}
						/>
						<input
							id="body"
							name="body"
							type="hidden"
							ref={this.body}
							value={this.state.body}
							onChange={this.onChange}
						/>
					</div>
					
					<button type="submit" className="btn btn-primary">Yayınla</button>
				</form>
			</>
		);
	}
}

export default PostForm;
