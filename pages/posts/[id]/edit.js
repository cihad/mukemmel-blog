import React from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../../../components/Layout";
import PostForm from "../../../components/PostForm"
import HeaderSm from "../../../components/HeaderSm"
import { API_BASE } from "../../../src/config"

const Edit = ({ post }) => (
	<Layout header={<HeaderSm />}>
		<h1 className="h2 border-bottom pb-3 mb-3">Yeni İçerik Formu</h1>
		<PostForm post={post}></PostForm>
	</Layout>
)

Edit.getInitialProps = async ({ req, query }) => {
	const res = await fetch(`${API_BASE}/posts/${query.id}`);
	const json = await res.json();
	return { post: json.post };
};

export default Edit;