import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "https://real-estate-two-rust.vercel.app",
  },
});

let onlineUsers = [];

const addUsers = (userId, socketId) => {
  const userExist = onlineUsers.find((user) => user.id === userId);
  if (!userExist) {
    onlineUsers.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUsers.find((user) => user.userId === userId);
};
io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    addUsers(userId, socket.id);
    console.log(onlineUsers);
  });
  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      console.log(data);
      io.to(receiver.socketId).emit("getMessage", data);
    }
  });
  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen(4000);
