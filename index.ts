import express from "express";
const app = express();
const PORT = 5000;

import { getPosts } from "./controllers/getPosts";
import { createPost } from "./controllers/createPost";
import { deletePost } from "./controllers/deletePost";
import { getPost } from "./controllers/getPost";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/posts", getPosts);
app.get("/post/:id", getPost);
app.post("/post", createPost);
app.delete("/post/:id", deletePost);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
