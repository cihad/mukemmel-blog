import { Post } from "../../../models"

export default async (req, res) => {
  const post = await Post.findByPk(req.query.postId)

  res.json({
    post: post
  });
};
