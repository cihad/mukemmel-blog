import Link from "next/link";
import PostMenu from "./PostMenu"

const PostView = ({ post }) => (
	<div className="mb-5">
		<div className="d-flex justify-content-between mb-2">
			<h3>
				<Link href={'/posts/' + post.id}>
					<a>{post.title}</a>
				</Link>
			</h3>

			<PostMenu post={post} />
		</div>

		<article dangerouslySetInnerHTML={{ __html: post.short }} />

		<div className="blog-footer d-flex justify-content-between">
			<Link href={'/posts/' + post.id}>
				<a className={"read-more"}>Devamını oku</a>
			</Link>
			<time>{new Date(Date.parse(post.createdAt)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
		</div>

		<style jsx global>{`
			article [data-block] {
				margin-left: 0;
				margin-right: 0;
			}
		`}</style>
	</div>
)

export default PostView
