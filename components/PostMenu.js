import { Dropdown } from "react-bootstrap"
import Link from "next/link"
import Router from "next/router"

class PostMenu extends React.Component {

	constructor (props) {
		super(props)
		this.handleDelete = this.handleDelete.bind(this)
	}

	async handleDelete (e) {
		e.preventDefault()

		try {
			const response = await fetch(`http://localhost:3000/api/posts/${this.props.post.id}`, {
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
						<Link href={`/posts/${post.id}/edit`}><span className="dropdown-item">Düzenle</span></Link>
						<Link href={`/posts/${post.id}`}><span className="dropdown-item" onClick={this.handleDelete}>Sil</span></Link>
					</Dropdown.Menu>
				</Dropdown>
			</>
		)
	}
}

export default PostMenu;