const express = require('express');
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const PORT = 3000
const bcrypt = require('bcryptjs')
const URI = "mongodb+srv://admin:admin@blog-website.utuektf.mongodb.net/?retryWrites=true&w=majority"
const postModel = require('./models/Post.js')
const userAuthModel = require('./models/User.js')





//middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}))



//mongodb connection setup
const func = async () => {
    await mongoose.connect(URI);
  }

func().then(() => {
    console.log('connected to the database');
    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`);
    })
    
}).catch((err) => {
    console.log(err);
})


//ROUTES : 

//home
app.get('/home', (req, res) => {
    res.render('home.ejs')
})

//register
app.get('/', (req,res) => {
    res.render('register.ejs');
});

app.post('/',async (req, res) => {
    const {name, email, password} = req.body;
    let user = await userAuthModel.findOne({email});
    if(user){
        return res.redirect('/');
    }

    const hashedPassword = await bcrypt.hash(password,12);

     user = new userAuthModel({
        name
        , email,
        password : hashedPassword
    });

    await user.save();
    res.redirect('/login');
})


//login
app.get('/login', (req, res) => {
    res.render('login');
})
app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await userAuthModel.findOne({email})
    if(!user){
        return res.redirect('/');
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if(!isMatched){
        return res.redirect('/login');
    }
    res.redirect('/home');
})


//community
app.get('/community', (req, res) => {
    res.render('community.ejs');
})

app.post('/community', async (req, res) => {
    const {name, content} = req.body;
    const post = new postModel({
        name, content
    })
    await post.save();
    res.redirect('/home');
})









