import express from "express";
import dotenv from "dotenv";
import router from "./src/Routes/route.js";
import cors from "cors";

//Load Environment Variables
dotenv.config();
const server = express();
server.use(cors());
//Parse URL
server.use(express.urlencoded({ extended: true }));
//Parse JSON
server.use(express.json());

//Routes
server.use("/api", router);

//404 Page
server.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});

//Server Listening
server.listen(process.env.PORT, () => {
  console.log(`Server is Running on port ${process.env.PORT}`);
});
