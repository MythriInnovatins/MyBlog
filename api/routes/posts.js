const express = require('express');
const router = express.Router();
const postController = require('../controller/post.controller');

router.post('/store',async (req,res,next)=>{
    var valid=await postController.SavePost(req,res,next);
    res.redirect('/');
});



router.get('/:id',async (req,res,next) =>{
   
    var post = await postController.PostDataById(req,res,next);
    res.render('post',{post:post});
});

module.exports=router;
//module.exports.PostsData = PostsData;
//module.exports.PostDataById = PostDataById;