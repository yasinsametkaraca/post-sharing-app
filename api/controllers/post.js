const PostSchema = require("../models/post.js");

const getPosts = async (req, res) => {
    try {
        const posts = await PostSchema.find();
        res.status(200).json(posts);
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}
const createPost = async (req, res) => {
    try {
        const newPost = await PostSchema.create(req.body);
        res.status(201).json(newPost);

    }catch (err) {
        res.status(500).json({message: err.message});
    }
}
const updatePost = async (req, res) => {
    try {
        const {id} = req.params;
        const update = await PostSchema.findByIdAndUpdate(id,req.body,{new:true});  //new:true demek güncelleme sonrası bize veriyi döner.
        res.status(200).json(update);
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}
const deletePost = async (req, res) => {
    try {
        const {id} = req.params;
        await PostSchema.findByIdAndRemove(id);
        res.status(200).json({message: "Post deleted successfully"});
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {getPosts,createPost,updatePost,deletePost};