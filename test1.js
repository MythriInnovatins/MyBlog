const mongoose = require('mongoose');
const Post = require('./database/post')

mongoose.connect('mongodb://localhost/MyBlog');

// Post.create({
//  title:'My second blog post',
//  description:'Second Blog post description',
//  content:'Second lorem ipsum'   
// }).then((error,result)=>{
//     console.log(error,result);
// });

Post.findById("5d981e57236b6f0918ab9a2b").then((result)=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})

// Post.findByIdAndUpdate("5d981e57236b6f0918ab9a2b",{
//     title:'Update My first blog post'
// }).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// });