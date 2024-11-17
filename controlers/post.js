const postModel = require("../models/posts_model");

const addNewPost = async (req, res) =>{
    try{
        const posts= await postModel.find();
            res.status(200).send(posts);
    }catch(error){
        res.status(400).send(error.message);
    }
};

const getpostById = async (req,res)=>{
    const postId= req.params.id;
    try{
        const post = await postModel.findById(postId);
            res.status(200).send(post);
    }catch(error){
        res.status(400).send(error);
    }

}

const createPost = async (req,res) =>{
    const post = req.body;
    try{
        const newPost = await postModel.create(post);
        res.status(201).send(newPost);
    }catch(error){
        res.status(400).send(error);

    }
};

module.exports = {addNewPost, createPost,getpostById};