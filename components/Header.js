import Link from "next/link";
import SocialLinks from "./SocialLinks"

const Header = () => (
	<header className="py-3 py-md-5 about-me">
		<div className={"container"}>
			<div className={"row"}>
				<div className={"col-sm-7 col-md-8 pr-md-5 pr-0 mb-3 mb-md-0 d-flex flex-column justify-content-center"}>
					<h1 className={"name mb-md-4 mb-md-3 title"}><strong>Merhaba <span className="hand">✋</span> yolcu</strong>,<br className="d-none d-sm-inline" /> Ben Selman Kahya</h1>
					<p className={"mb-md-5"}>
						Ben bir <strong>önyüz &amp; arayüz geliştiricisi</strong>yim. Şu anda <strong>Airbnb</strong>'de çalışıyorum.
						Aynı zamanda bir 🎥 <strong>Youtube</strong> yayıncısıyım. Bu açıklamayı benim için
						yarışmacı (<a href="https://youtu.be/cHUh0FmPd3A" title="Yarışma hakkında">*</a>) arkadaş yaptı. Bu siteyi de o yaptı.
					</p>
					<SocialLinks />
				</div>
				<div className={"col-sm-5 col-md-4 d-flex align-items-center"}>
					<div className={"segment d-flex align-items-center flex-row flex-row flex-sm-column p-3 p-sm-4"}>
						<img src="https://yt3.ggpht.com/a/AGF-l79AOJRledCZxpPXGunr1g3udtlkCay7QCNFIQ=s288-c-k-c0xffffffff-no-rj-mo"
							className={"rounded-circle img-fluid mb-4 mr-3 mr-sm-0"} />
						<div className="text-left text-sm-center">
							<p>Youtube'da düzenli olarak canlı kodlama etkinlikleri yapıyorum.</p>
							<a href="https://www.youtube.com/user/SirChintzy" className={"btn btn-danger"}>TAKİPTE KAL</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<style jsx>{`
			header {
				border-top: 3px solid #03c;
				background-color: #0033cc0a;
			}

			@media (max-width: 575.98px) {
				.title {
					font-size: 1.5em;
				}

				.segment > img {
					max-width: 100px !important;
				}
			}

			@media (min-width: 576px) and (max-width: 767.98px) {
				.title {
					font-size: 2.2em;
				}
			}

			.segment,
			.segment::before,
			.segment::after {
				border: 1px solid rgba(50, 50, 50, .15);
				background-color: white;
				box-shadow: 0 1px 2px 0 rgba(50, 50, 50, .15);
				border-radius: .3em;
			}

			.segment {
				position: relative;
				padding: 1.4em;
			}

			.segment::before,
			.segment::after {
				content: '';
				display: block;
				height: 100%;
				left: 0;
				position: absolute;
				width: 100%;
				top: 0;
				z-index: -2;
			}

			.segment::before {
				transform: rotate(-2deg);
			}

			.segment::after {
				transform: rotate(2deg);
			}

			.segment > img {
				max-width: 120px;
			}

			.segment p {
				line-height: 1.2em;
			}

			.about-me:hover .hand {
				display: inline-block;
				animation: waver 0.65s alternate infinite;
				transform-origin: 50% 90%;
				animation-timing-function: ease-in-out;
			}

			@keyframes waver {
				0% {transform: rotate(-25deg);}
				100% {transform: rotate(30deg);}
			}
		`}</style>
	</header>
)

export default Header
