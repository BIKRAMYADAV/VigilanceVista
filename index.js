const express = require('express');
const mongoose = require('mongoose')
const app = express()
const path = require('path')
const PORT = 3000
const URI = process.env.MONGO_URI
const usermodel = require('./models/community.js')
const func = async () => {
  await mongoose.connect(URI);
}

app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}))

func().then(() => {
    console.log('connected to the database');
    app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`);
    })
    
}).catch((err) => {
    console.log(err);
})


app.get('/', (req,res) => {
    res.render('community.ejs');
});

app.post('/',async (req, res) => {
    const {name, post} = req.body;
    const user = new usermodel({
        name
        , post
    });

    await user.save();
})









