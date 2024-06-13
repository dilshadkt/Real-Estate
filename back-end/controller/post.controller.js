import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import logger from "../utilities/logger/index.js";
export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    logger.error("Failed to get posts", error);
    res.status(500).json({ messagae: "Failed to get posts" });
  }
};
export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetails: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    const token = req.cookies?.token;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
        if (!err) {
          const saved = await prisma.savedPost.findUnique({
            where: {
              userId_postId: {
                postId: id,
                userId: payload.id,
              },
            },
          });
          res.status(200).json({ ...post, isSaved: saved ? true : false });
        }
      });
    } else {
      res.status(200).json({ ...post, isSaved: false });
    }
  } catch (err) {
    logger.error("Failed to get post ", err);
    res.status(500).json({ message: "Failed to get post" });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;
  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,
        postDetails: {
          create: body.postDetails,
        },
      },
    });
    res.status(200).json(newPost);
  } catch (error) {
    logger.error("Failed to create post", error);
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
  const id = req.params.id;
  const tokenUserId = req.userId;
  console.log(tokenUserId);

  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    console.log(post);
    if (post.userId !== tokenUserId) {
      return res.status(403).json({ messagae: "Not Authorized" });
    }
    await prisma.post.delete({
      where: { id },
    });
    res.status(200).json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messagae: "Failed to delete posts" });
  }
};
