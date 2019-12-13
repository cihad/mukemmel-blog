import React from "react";
// import fetch from "isomorphic-unfetch";
import Layout from "../../components/Layout";
import { Formik } from "formik"
import Router from "next/router"

class New extends React.Component {

	constructor (props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validate = this.validate.bind(this);
	}

	state = {
		sending: false
	}

	async handleSubmit (values) {
		try {
			this.setState({
				sending: true
			})
			const response = await fetch('/api/posts', {
				method: 'post',
				body: JSON.stringify(values),
				headers: {
					'content-type': 'application/json'
				},
			})

			const { post } = await response.json();
			
			Router.push(`/posts/${post.id}`)
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
			<Layout>
				<h1 className="h2 border-bottom pb-3 mb-3">Yeni İçerik Formu</h1>
				<Formik
					enableReinitialize={false}
					initialValues={{ title: "", body: "" }}
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
						}) => {
							return <form onSubmit={handleSubmit}>
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

								<button type="submit" className="btn btn-primary" disabled={isSubmitting} disabled={this.sending}>Yayınla</button>
							</form>
						}
					}
				</Formik>
			</Layout>
		);
	}
}

export default New;
