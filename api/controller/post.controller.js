const postService = require('../services/post.service');

exports.GetAllPosts = async function(req,res,next){
    var posts = await postService.GetAllPosts(req,res,next);
    return posts;
};

exports.PostDataById = async function(req,res,next){
    console.log(req.params.id);
    var post = await postService.PostDataById(req,res,next);
    return post;
};

exports.SavePost = async function(req,res,next){
    var valid = await postService.SavePost(req,res,next);
    return valid;
};