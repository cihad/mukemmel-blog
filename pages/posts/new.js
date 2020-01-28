import React from "react";
import Layout from "../../components/Layout";
import PostForm from "../../components/PostForm"
import HeaderSm from "../../components/HeaderSm"
export default () => (
	<Layout header={<HeaderSm />}>
		<h1 className="h2 border-bottom pb-3 mb-3">Yeni İçerik Formu</h1>
		<PostForm post={{title: '', body: ''}}></PostForm>
	</Layout>
)