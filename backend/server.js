import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./app/routes/auth.routes.js";
import messageRoutes from "./app/routes/message.routes.js";
import userRoutes from "./app/routes/user.routes.js";
import conversationRoutes from "./app/routes/conversation.routes.js";

import connectToMongoDB from "./app/config/mongoose.js";
import { app, server } from "./app/socket/socket.js";

// const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/conversations", conversationRoutes);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
