import prisma from "../lib/prisma.js";
export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ messagae: "Failed to get posts" });
  }
};
export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: [id],
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ messagae: "Failed to get post" });
  }
};
export const createPost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ messagae: "Failed to create posts" });
  }
};
export const updatePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ messagae: "Failed to update posts" });
  }
};
export const deletePost = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ messagae: "Failed to delete posts" });
  }
};
