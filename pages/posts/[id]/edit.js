import React from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../../../components/Layout";
import PostForm from "../../../components/PostForm"

const Edit = ({ post }) => (
	<Layout>
		<h1 className="h2 border-bottom pb-3 mb-3">Yeni İçerik Formu</h1>
		<PostForm post={post}></PostForm>
	</Layout>
)

Edit.getInitialProps = async ({ req, query }) => {
	const res = await fetch(`http://localhost:3000/api/posts/${query.id}`);
	const json = await res.json();
	return { post: json.post };
};

export default Edit;