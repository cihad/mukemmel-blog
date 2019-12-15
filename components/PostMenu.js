import { Dropdown } from "react-bootstrap"
import Link from "next/link"
import Router from "next/router"
import { API_BASE } from "../src/config"

class PostMenu extends React.Component {

	constructor (props) {
		super(props)
		this.handleDelete = this.handleDelete.bind(this)
	}

	async handleDelete (e) {
		e.preventDefault()

		try {
			const response = await fetch(`${API_BASE}/posts/${this.props.post.id}`, {
				method: "DELETE"
			})

			const { deletedPosts } = await response.json();

			if (deletedPosts) Router.push("/")
		} catch (error) {
			console.error(error)
		}
	}

	render () {
		const { post } = this.props;

		return (
			<>
				<Dropdown>
					<Dropdown.Toggle variant="link">
						&#9881;
					</Dropdown.Toggle>
		
					<Dropdown.Menu>
						<Link href={`/posts/${post.id}/edit`}>
							<a className="dropdown-item">Düzenle</a>
						</Link>
						<a className="dropdown-item" href="#" onClick={this.handleDelete}>Sil</a>
					</Dropdown.Menu>
				</Dropdown>
			</>
		)
	}
}

export default PostMenu;