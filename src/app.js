const express = require('express');
const app = express();
const mongoose = require('mongoose');
var users   =require("../models/user.js");


const url = process.env.DATABASE_URL || "mongodb://localhost/users";
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


//Router Middlewares
app.use(express.json());

//Type of query (Hint)

/*

1. / --> this means we need to consider all users
2. /?name=swa --> Will return count of all the user name that have prefix swa. We will (Swaraj Jain, Swarak agrawal, etc). 
3. /?name= -->this means we need to consider all users

*/


// Complete this Route which will return the count of Number of Prefixmatch for the name in the query/

app.get("/",async function(req,res){

    var count = 0;

    //Write you code here
    //update count variable

    res.send(JSON.stringify(count));

});

module.exports = app;
