import prisma from "../lib/prisma.js";
import logger from "../utilities/logger/index.js";
export const getChats = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const chats = await prisma.chat.findMany({
      where: {
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
    });

    for (const chat of chats) {
      const receiverId = chat.userIDs.find((id) => id !== tokenUserId);
      const receiver = await prisma.user.findUnique({
        where: {
          id: receiverId,
        },
        select: {
          id: true,
          avatar: true,
          username: true,
        },
      });
      chat.receiver = receiver;
    }

    res.status(200).json(chats);
  } catch (error) {
    logger.error(error);
    console.log(error);

    res.status(500).json({ message: "Failed to get chats" });
  }
};
export const getChat = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      include: {
        message: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });
    await prisma.chat.update({
      where: {
        id: req.params.id,
      },
      data: {
        seenBy: {
          push: [tokenUserId],
        },
      },
    });
    res.status(200).json(chat);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: "Failed to get chat" });
  }
};
export const addChat = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const chat = await prisma.chat.findFirst({
      where: {
        userIDs: {
          hasSome: [tokenUserId, req.body.receiverId],
        },
      },
    });
    if (chat) {
      res.status(200).json(chat);
    } else {
      const newChat = await prisma.chat.create({
        data: {
          userIDs: [tokenUserId, req.body.receiverId],
        },
      });
      res.status(200).json(newChat);
    }
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: "Failed to add chats" });
  }
};
export const readChat = async (req, res) => {
  const tokenUserId = req.userId;
  try {
    const chat = await prisma.chat.update({
      where: {
        id: req.params.id,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
      data: {
        seenBy: {
          set: [tokenUserId],
        },
      },
    });
    res.status(200).json(chat);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: "Failed to read chats" });
  }
};
