const express = require('express')
const cors = require('cors')
const PORT = 3000
const mongoose = require('mongoose')
const app = express()
const userAuthModel = require('./models/User.js')
const CommunityModel = require('./models/Community.js')
app.use(express.json())

app.use(cors(
    {
        origin : ["https://vigilance-vista.vercel.app/"],
        methods : ["POST", "GET"],
        credentials : true
    }
))

const func = async () => {
await mongoose.connect('mongodb+srv://admin:admin@blog-website.utuektf.mongodb.net/?retryWrites=true&w=majority')
}

func().then(() => {
    console.log('connected to the database')
    app.listen(PORT, () => console.log(`The app is listening on port ${PORT}`))
})

//login route
app.post('/login', (req, res) => {
    const {email, password} = req.body
    userAuthModel.findOne({email : email})
    .then(user => {
        if(user) {
            if (user.password === password){
                res.json('Success')
            }
            else{
                res.json('the password is incorrect')
            }
        } else{
            res.json('the user does not exist. signup first')
        }
    })
})


app.post('/register', (req, res) => {
  userAuthModel.create(req.body)
  .then(user => {console.log(user)
    res.redirect('http://localhost:5173/Login')
})
  .catch(err => console.log(err))
})

//get data
app.get('/community', async (req, res) => {
    try{
        const data = await CommunityModel.find()
        res.json(data)
    }
    catch(error) {
        console.log(error);
    }
})


app.post('/community', async (req, res) => {
    let post = new CommunityModel(req.body);
     let result = await post.save()
     res.send(result)

 })
