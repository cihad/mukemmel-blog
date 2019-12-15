import React from "react";
import fetch from "isomorphic-unfetch";
import { Formik } from "formik"
import Router from "next/router"
import { API_BASE } from "../src/config"

class PostForm extends React.Component {
	static async getInitialProps({ query }) {
		if (query.id) {
			const res = await fetch(`${API_BASE}/posts/${query.id}`);
			const json = await res.json();
			return { post: json.post };
		} else {
			return {}
		}
	}

	constructor (props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validate = this.validate.bind(this);
	}

	async handleSubmit (values) {
		const persistedId = this.props.post ? this.props.post.id : undefined

		try {
			const response = await fetch(persistedId ? `${API_BASE}/posts/${persistedId}` : `${API_BASE}/posts`, {
				method: persistedId ? 'put' : 'post',
				body: JSON.stringify(values),
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

	validate (values) {
		const errors = {};
							
		if (!values.title) {
			errors.title = 'Gerekli';
		}
		
		return errors;
	}
	
	render () {
		return (
			<>
				<Formik
					enableReinitialize={false}
					initialValues={
						this.props.post
							? this.props.post
							: { title: "", body: "" }
					}
					validate={this.validate}
					onSubmit={this.handleSubmit}
				>
					{
						({
							values,
							touched,
							errors,
							isSubmitting,
							handleChange,
							handleBlur,
							handleSubmit
						}) => (
							<form onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="title">Başlık</label>
									<input
										id="title"
										name="title"
										type="text"
										className={
											errors.title && touched.title
												? "form-control is-invalid"
												: "form-control"
										}
										value={values.title}
										onBlur={handleBlur}
										onChange={handleChange}
									/>
									{
										errors.title && touched.title && (
											<div className="invalid-feedback">
												{errors.title}
											</div>
										)
									}
								</div>
								<div className="form-group">
									<label htmlFor="body">İçerik</label>
									<textarea
										id="body"
										name="body"
										className={
											errors.body && touched.body
												? "form-control is-invalid"
												: "form-control"
										}
										value={values.body}
										rows="10"
										onBlur={handleBlur}
										onChange={handleChange}
									>
									</textarea>
									<small className="form-text text-muted">Lütfen markdown formatında giriş yapınız.</small>
									{
										errors.body && touched.body && (
											<div className="invalid-feedback">
												{errors.body}
											</div>
										)
									}
								</div>

								{
									isSubmitting 
										? <button className="btn btn-primary" type="button" disabled>
												<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
												&nbsp; Gönderiliyor...
									  		</button>
										: <button type="submit" className="btn btn-primary">Yayınla</button>
								}
							</form>
						)
					}
				</Formik>
			</>
		);
	}
}

export default PostForm;
