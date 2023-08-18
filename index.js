// hello!
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app =express();

app.use(express.json());
app.use(cors());

app.get('/',(req, res)=>{
    res.send('This is the main page');
})


app.listen(8080, ()=>{
    // res.send('new user has been createed');
    console.log(`listening to server  8080`);
})