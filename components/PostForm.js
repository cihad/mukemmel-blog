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
	constructor (props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.editor = React.createRef();
		this.body = React.createRef();
		this.short = React.createRef();
		const { title, body } = props.post
		this.state  = { title, body, short: "" }
	}

	async onSubmit (e) {
		e.preventDefault()

		const persistedId = this.props.post ? this.props.post.id : undefined

		try {
			console.log(API_BASE)
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

				<script dangerouslySetInnerHTML={{__html: `
						function setReactInputValue(input, value) {
							const previousValue = input.value;
							input.value = value;
							const tracker = input._valueTracker;
							if (tracker) {
							  tracker.setValue(previousValue);
							}
							input.dispatchEvent(new Event('change', { bubbles: true }));
						}

						class ReadMore extends CaCore.Block {
							static get viewComponent () {
								return {
									template: \`
										<div class="read-more">
											<hr />
											<span>Read More</span>
											<hr />
										</div>\`,
									inject: ['slottedBlocks'],
									props: ['value'],
									watch: {
										slottedBlocks: {
											immediate: true,
											deep: true,
											handler () {
												const index = this.slottedBlocks.indexOf(this.value);
												let shortBlocks = this.slottedBlocks.slice(0, index);
												shortBlocks = CaCore.renderBlocks(shortBlocks)
												const short = document.getElementById("short")
												if (!short) return;
												setReactInputValue(short, shortBlocks)
											}
										}
									}
								}
							}

							static serializeFromHTML (doc) {
								return {}
							}

							toHTML () {
								return ""
							}
						}

						CaCore.Blocks.register(ReadMore)
					
				`}}></script>

				<style className={"editor"} dangerouslySetInnerHTML={{__html: `
					[data-block=ReadMore] .read-more {
						padding: 1em 0;
						display: flex;
						align-items: center;
					}

					[data-block=ReadMore] .read-more span {
						padding: 0 1em;
					}

					[data-block=ReadMore] .read-more hr{
						flex: 1;
						border: 0;
						border-bottom: 1px solid #ccc;
					}
				` }} />

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
							id="editor"
							ref={this.editor}
							value={
								this.state.body
									? this.state.body
									: '<div data-block="Paragraph"><p>Harika blog yazım...</p></div>'
							}
						/>
					</div>

					<input
						id="short"
						name="short"
						type="text"
						style={{display: 'none'}}
						ref={this.short}
						value={this.state.short}
						onChange={this.onChange}
					/>
					
					<button type="submit" className="btn btn-primary">Yayınla</button>
				</form>

				<script dangerouslySetInnerHTML={{__html: `
					editor.classOptions = [
						{
							blocks: ["Paragraph"],
							classes: {
								"drop-cap": "Big First Letter"
							}
						}
					]
				` }} />
			</>
		);
	}
}

export default PostForm;
