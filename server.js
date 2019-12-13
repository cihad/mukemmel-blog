const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
dotenv.config();

const { Post, sequelize } = require("./models/index.js")


app.prepare().then(() => {

	// This is the default route, don't edit this.
	server.get('*', (req, res) => {
		return handle(req, res);
	});
	const port = process.env.PORT || 3000;

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on port ${port}...`);
	});

	server.post("/api/posts", (req, res) => {
		const { title, body } = req.body
		
		sequelize
			.sync()
			.then(() => {
				return Post.create({
					title,
					body,
					createdAt: new Date(),
					updatedAt: new Date()
				})
			})
			.then(post => {
				res.json({ post });
			});
	})

	server.put("/api/post/:id", (req, res) => {
		const id = req.params.id
		const { title, body } = req.body

		// console.log(req)
		// res.json({ id });
		// return
		
		sequelize
			.sync()
			.then(() => {
				return Post.update({
					id,
					title,
					body,
					updatedAt: new Date()
				}, {
					where: { id: id }
				})
			})
			.then(post => {
				res.json({ post });
			});
	})

});