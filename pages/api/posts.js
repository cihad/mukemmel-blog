import { Post } from "../../models"

export default async (req, res) => {
  const posts = await Post.findAll({ order: [['createdAt', 'DESC']] });
  
  res.json({ posts });
};
