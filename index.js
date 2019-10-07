
const http = require('http');
const app =require('./app');

// app.use(express.static('public'));
// app.use(engine);
// app.set('views', `${__dirname}/views`);

// app.get('/',(req,res) =>{
//   // res.sendFile(path.resolve(__dirname,'pages/index.html'));
//   res.render('index');
// });

// app.get('/about',(req,res) =>{
//     //res.sendFile(path.resolve(__dirname,'pages/about.html'));
//     res.render('about');
// });

// app.get('/post',(req,res) =>{
//     // res.sendFile(path.resolve(__dirname,'pages/post.html'));
//     res.render('post');
// });

// app.get('/contact',(req,res) =>{
//     //res.sendFile(path.resolve(__dirname,'pages/contact.html'));
//     res.render('contact');
// });



const server = http.createServer(app);
server.listen(4000,() =>{
    console.log('app listening on the port 4000');
});


