const express = require("express");
const router = express.Router();
const post = require("../controlers/post");

router.get("/", post.addNewPost);
router.get("/:id", post.getpostById);
router.post("/",post.createPost);

module.exports= router;