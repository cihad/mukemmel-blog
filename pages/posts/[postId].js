import React from "react";
import fetch from "isomorphic-unfetch";
import PostView from "../../components/PostView.js";
import Layout from "../../components/Layout";

const BlogPost = ({ post }) => (
	<Layout>
		<PostView post={post} page={true}></PostView>
	</Layout>
);

BlogPost.getInitialProps = async ({ req, query }) => {
	// TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
	const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
	const json = await res.json();
	return { post: json.post };
};

export default BlogPost;
