const io = require("socket.io")(8000, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let activeUsers = [];

const addUser = (userId, socketId, userInfo) => {
  const checkUser = activeUsers?.find((u) => u?.userId === userId);
  if (!checkUser) {
    activeUsers.push({ userId, socketId, userInfo });
    io.emit("onlineUser", activeUsers);
  }
};

const removeUser = (socketId) => {
  activeUsers = activeUsers?.filter((u) => u?.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("addUser", (userId, userInfo) => {
    addUser(userId, socket?.id, userInfo);
  });
  socket.on("disconnect", () => {
    removeUser(socket?.id);
	console.log('user disconnected');
  });
});
