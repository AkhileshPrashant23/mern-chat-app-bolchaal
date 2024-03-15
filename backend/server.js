import path from "path";
import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import usersRoutes from "./routes/user.route.js";
import { app, server } from "./Socket/socket.js";

import connectToMongoDB from './db/connectToMongoDB.js';


const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config(); 

app.use(express.json()); // to parse  the incoming request with json payloads (from req.body)
app.use(cookieParser()); // to parse the incoming request with cookie values 

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", usersRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*" , (req, res) => {
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});

server.listen(PORT , () => {
    connectToMongoDB();
    console.log(`listening on port ${PORT}`);

});