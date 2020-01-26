import ReactMarkdown from "react-markdown";
import Link from "next/link";
import PostMenu from "./PostMenu"

const PostView = ({ post, page }) => (
	<div className="blog">
		<h2 className="blog-title d-flex justify-content-center mb-5">
			{
				page
					? 	post.title
					: 	<Link href={'/posts/' + post.id}>
							<a className="blog-title-link">{post.title}</a>
						</Link>
			}

			<PostMenu post={post} />
		</h2>
			
		<div className="blog-text">
			<div dangerouslySetInnerHTML={{ __html: post.body }}></div>
			{/* <ReactMarkdown source={post.body} /> */}
		</div>

		<div className="blog-date">{new Date(Date.parse(post.createdAt)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
		<style jsx>{`
			.blog-date {
				text-align: right;
				color: #cccccc;
				margin: 12px 0 48px 0;
			}

			.blog-title {
				max-width: 80%;
				margin-left: auto;
				margin-right: auto;
			}
		`}</style>
	</div>
)

PostView.getInitialProps = async ({ req }) => {
};

export default PostView
