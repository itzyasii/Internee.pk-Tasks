const socket = require("socket.io");
const { saveMessage } = require("../controllers/messageController");
const onlineUsers = [];

const removeUser = (socketId) => {
  const isExist = onlineUsers.findIndex((item) => item.socketId === socketId);
  if (isExist !== -1) {
    onlineUsers.splice(isExist, 1);
  }
};

const addUser = (user, socketId) => {
  const isExist = onlineUsers.findIndex((item) => item.userId === user.userId);
  if (isExist !== -1) {
    onlineUsers.splice(isExist, 1);
  }
  user.socketId = socketId;
  onlineUsers.push(user);
};

const socketInit = (server) => {
  const io = socket(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  io.on("connection", (socket) => {
    socket.on("ADD_USER", (user) => {
      addUser(user, socket.id);
      io.emit("USER_ADDED", onlineUsers);
    });
    socket.on("SEND_MSG", async (msg) => {
      const isSaved = await saveMessage(msg);
      io
        .to(msg.receiver.socketId)
        .to(msg.sender.socketId)
        .emit("RECEIVE_MSG", isSaved);
    });

    socket.on("DELETE_MSG", (msg) => {
      socket.to(msg.receiver.socketId).emit("DELETED_MSG", msg);
      saveMessage(msg);
    });

    socket.on("disconnect", () => {
      removeUser(socket.id);
      io.emit("USER_ADDED", onlineUsers);
    });
  });
};

module.exports = socketInit;
