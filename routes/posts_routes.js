const express = require("express");
const router = express.Router();
const post = require("../controlers/post");

router.get("/", post.getAllposts);
router.get("/:id", post.getpostById);
router.post("/",post.addNewPost);
router.put("/:id",post.updatePost);
// router.get("/",post.getPostsSender);

module.exports= router;