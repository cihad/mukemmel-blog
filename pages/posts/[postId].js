import React from "react";
import fetch from "isomorphic-unfetch";
import Post from "../../components/post.js";
import Layout from "../../components/Layout";

const BlogPost = ({ post }) => (
	<Layout>
		<Post post={post} page={true}></Post>
	</Layout>
);

BlogPost.getInitialProps = async ({ req, query }) => {
	// TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
	const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
	const json = await res.json();
	return { post: json.post };
};

export default BlogPost;
