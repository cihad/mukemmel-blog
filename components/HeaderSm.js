import Link from "next/link";
import SocialLinks from "./SocialLinks"

const Header = () => (
	<header>
		<div className={"container"}>
			<div className={"row"}>
				<div className={"col-10 d-flex flex-column justify-content-center"}>
					<h1 className={"h3 mb-0"}>
						<Link href="/">
							<a title="Anasayfa">Selman Kahya Blog</a>
						</Link>
					</h1>
					<SocialLinks />
				</div>
				<div className={"col-2 d-flex align-items-center"}>
					<img src="https://yt3.ggpht.com/a/AGF-l79AOJRledCZxpPXGunr1g3udtlkCay7QCNFIQ=s288-c-k-c0xffffffff-no-rj-mo" className={"rounded-circle img-fluid"} />
				</div>
			</div>
		</div>

		<style jsx>{`
			header {
				border-top: 3px solid #03c;
				padding: 1em 0;
				background-color: #0033cc0a;
			}
		`}</style>
	</header>
)

export default Header
