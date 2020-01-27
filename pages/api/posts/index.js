import { Post } from "../../../models"

export default async (req, res) => {
	switch (req.method) {
		case "GET":
			const page = req.query.page || 1

			const options = {
				page,
				paginate: 10, // TODO: uygulama konfigurasyonundan alinsin.
				order: [['createdAt', 'DESC']],
			}
		
			const { docs, pages, total } = await Post.paginate(options);
		
		
			res.json({ pages, total, posts: docs });

			break;
		
		case "POST":
			const { title, body, short } = req.body
		
			const post = await Post.create({
				title,
				body,
				short,
				createdAt: new Date(),
				updatedAt: new Date()
			})
			
			res.json({ post });

			break;
	}

};
