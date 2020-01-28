import Link from "next/link";

const SocialLinks = () => (
	<>
		<div className={"social-links"}>
			<Link href="//medium.com/@selmankahya">
				<a>Medium</a>
			</Link>
			<Link href="//www.twitter.com/selmankahyax">
				<a>Twitter</a>
			</Link>
			<Link href="//www.linkedin.com/in/selmankahya">
				<a>LinkedIn</a>
			</Link>
			<Link href="//www.instagram.com/selmankahyax/?hl=en">
				<a>Instagram</a>
			</Link>
		</div>

		<style jsx>{`
			.social-links > a::after {
				content: '/';
				display: inline-block;
				padding: 0 .5em;
				color: black;
			}

			.social-links > a:last-child::after {
				content: ''
			}
		`}</style>
	</>
)

export default SocialLinks
