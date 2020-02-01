import Link from "next/link";
import PostMenu from "./PostMenu"
import Share from "./Share"

const PostView = ({ post }) => (
	<div className="blog">
		<div className="mb-4 d-flex justify-content-between">
			<Link href={'/'}>
				<a className="posts-link">Yazılarım</a>
			</Link>

			<Share text={post.title} />

			<PostMenu post={post} />
		</div>

		<div className="blog-title text-center d-flex flex-column align-items-center">
			<h2>{post.title}</h2>

			<div className="blog-date py-2 mt-3 mb-5">{new Date(Date.parse(post.createdAt)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
		</div>
			
		<article dangerouslySetInnerHTML={{ __html: post.body }} />

		<style jsx>{`
			.blog-date {
				border-width: 1px 0;
				border-style: solid;
				border-color: #444;
			}

			.blog-title h2 {
				margin-left: auto;
				margin-right: auto;
			}

			.posts-link::before {
				content: "⟵";
				display: inline-block;
				padding-right: 5px;
			}

			.title-hr {
				width: 20%;
			}
		`}</style>

		<style jsx global>{`
			// xs
			@media (max-width: 575.98px) {
				[data-block] {
					margin: 0;
				}
			}

			// sm
			@media (min-width: 576px) and (max-width: 767.98px) {
				[data-block] {
					margin: 0 50px;
				}
			}
		`}</style>
	</div>
)

export default PostView
