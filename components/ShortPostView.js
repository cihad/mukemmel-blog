import Link from "next/link";
import PostMenu from "./PostMenu"

const PostView = ({ post }) => (
	<div className="mb-4">
		<div className="d-flex justify-content-between mb-2">
			<h3>
				<Link href={'/posts/' + post.id}>
					<a>{post.title}</a>
				</Link>
			</h3>

			<PostMenu post={post} />
		</div>

		<div className={"short-body"} dangerouslySetInnerHTML={{ __html: post.short }}>
		</div>

		<div className="blog-footer d-flex justify-content-between">
			<Link href={'/posts/' + post.id}>
				<a className={"read-more"}>Devamını oku</a>
			</Link>
			<time>{new Date(Date.parse(post.createdAt)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
		</div>

		<style jsx global>{`
			.short-body [data-block] {
				margin-left: 0;
				margin-right: 0;
			}
		`}</style>
	</div>
)

export default PostView
