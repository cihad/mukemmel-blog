import ReactMarkdown from "react-markdown";
import Link from "next/link";

const Post = (props) => (
	<div className="blog">
		<h2 className="blog-title">
			<Link href={props.post.slug}>
				<a className="blog-title-link">{props.post.title}</a>
			</Link>
		</h2>

		<div className="blog-text">
			<ReactMarkdown source={props.post.details} />
		</div>

		<div className="blog-date">{props.post.date}</div>
		<style jsx>{`
			.blog-date {
				text-align: right;
				color: #cccccc;
				margin: 12px 0 48px 0;
			}
		`}</style>
	</div>
)

export default Post
