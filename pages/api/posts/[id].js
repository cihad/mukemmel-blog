import { Post } from "../../../models"

export default async (req, res) => {
	const id = req.query.id
	let post;

	switch (req.method) {
		case "PUT":
			const { title, body, short } = req.body
		
			post = await Post.update({
				id,
				title,
				body,
				short,
				updatedAt: new Date()
			}, {
				where: { id }
			})
		
			res.json({ post });

			break;
		case "DELETE":
			const deletedPosts = await Post.destroy({
				where: { id }
			})
			
			res.json({ deletedPosts });
			break;
		case "GET":
			post = await Post.findByPk(id)

			res.json({ post });
			break;
	}

};
