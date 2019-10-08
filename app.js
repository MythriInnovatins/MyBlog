const express=require('express');
const path=require('path');
const app = express();
const router = express.Router();
const { engine } = require('express-edge');
const postController = require('./api/controller/post.controller');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRoutes = require('./api/routes/posts');
// const productsRoutes = require('./api/routes/products');


//mongoose.connect('mongodb://localhost/MyBlog');
//mongoose.connect("mongodb+srv://hiran:Kailas@12345@myblog-wtlpn.mongodb.net/admin?retryWrites=true&w=majority",{ useNewUrlParser: true });

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(engine);
app.set('views', `${__dirname}/views`);

app.get('/about',(req,res) =>{
    res.render('about');
});

app.get('/',async(req,res,next)=>{
    try
    {
        console.log('hiran');
    var posts=await postController.GetAllPosts(req,res,next);
    console.log(posts);
    res.render('index',{posts:posts});
    }
    catch(ex)
    {
        console.log(ex);
    }
});

app.get('/contact',(req,res) =>{
    //res.sendFile(path.resolve(__dirname,'pages/contact.html'));
    res.render('contact');
});

app.get('/create', (req,res) =>{
    res.render('create');
});

//Api
//-----------
// app.use('/products',productsRoutes);
app.use('/posts',postsRoutes);
module.exports = app;
