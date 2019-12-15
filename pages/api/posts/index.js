import { Post } from "../../../models"

export default async (req, res) => {
	const page = req.query.page || 1

	const options = {
		page,
		paginate: 10, // TODO: uygulama konfigurasyonundan alinsin.
		order: [['createdAt', 'DESC']],
  }

	const { docs, pages, total } = await Post.paginate(options);


	res.json({ pages, total, posts: docs });
};
