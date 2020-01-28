import Link from "next/link";
import PostMenu from "./PostMenu"

const PostView = ({ post }) => (
	<div className="blog">
		<div className="mb-4">
			<Link href={'/'}>
				<a className="btn btn-light">⟵ Yazılarım</a>
			</Link>
		</div>

		<div className="blog-title d-flex justify-content-center text-center mb-5">
			<h2>
				{post.title}
			</h2>
			<PostMenu post={post} />
		</div>
			
		<div className="blog-text" dangerouslySetInnerHTML={{ __html: post.body }}>
		</div>

		<div className="blog-date">{new Date(Date.parse(post.createdAt)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
		<style jsx>{`
			.blog-date {
				text-align: right;
				color: #cccccc;
				margin: 12px 0 48px 0;
			}

			.blog-title h2 {
				margin-left: auto;
				margin-right: auto;
			}
		`}</style>
	</div>
)

export default PostView
