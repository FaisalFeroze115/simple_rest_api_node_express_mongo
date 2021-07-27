const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

// MIDDLEWARES
// app.use('/post', ()=>{
//     console.log('This is a middleware');
// })
app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on HOME');
})

// app.get('/post', (req, res) => {
//     res.send('We are on POST');
// })

// Import ROUTES

const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute)

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true },()=>{
    console.log('connected to DB !!');
});
 

//Listen to the server
app.listen(3000);