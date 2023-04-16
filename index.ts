import express from "express";
const cors = require("cors");
const app = express();
const PORT = 5000;

import { getPosts } from "./controllers/getPosts";
import { createPost } from "./controllers/createPost";
import { deletePost } from "./controllers/deletePost";
import { getPost } from "./controllers/getPost";
import { updatePost } from "./controllers/updatePost";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/posts", getPosts);
app.get("/post/:id", getPost);
app.post("/post", createPost);
app.delete("/post/:id", deletePost);
app.put("/post/:id", updatePost);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
