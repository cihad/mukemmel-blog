import ReactMarkdown from "react-markdown";
import Link from "next/link";
import PostMenu from "./PostMenu"

const PostView = ({ post, page }) => (
	<div className="blog">
		<h2 className="blog-title d-flex">
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
			<ReactMarkdown source={post.body} />
		</div>

		<div className="blog-date">{new Date(Date.parse(post.createdAt)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
		<style jsx>{`
			.blog-date {
				text-align: right;
				color: #cccccc;
				margin: 12px 0 48px 0;
			}
		`}</style>
	</div>
)

PostView.getInitialProps = async ({ req }) => {
};

export default PostView
