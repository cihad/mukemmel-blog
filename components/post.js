import ReactMarkdown from "react-markdown";
import Link from "next/link";

const Post = ({ post, page }) => (
	<div className="blog">
		<h2 className="blog-title">
			{
				page
					? 	post.title
					: 	<Link href={'/posts/' + post.id}>
							<a className="blog-title-link">{post.title}</a>
						</Link>
			}
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

Post.getInitialProps = async ({ req }) => {
};

export default Post
