import prisma from "../lib/prisma.js";

export const getChats = async (req, res) => {
  const tokenUserId = req.userId;
  try {
  } catch (error) {
    res.status(500).json({ message: "Failed to get chats" });
  }
};
export const getChat = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Failed to get chat" });
  }
};
export const addChat = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Failed to add chats" });
  }
};
export const readChat = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Failed to read chats" });
  }
};
