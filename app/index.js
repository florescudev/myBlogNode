/*Common Variables Implementation*/
const express = require('express');
const PORT = 8080;
const app = express();

/*Routes*/

/*Welcome Route*/
app.get('/app/index', (req, res) => {
    res.send("Welcome Aboard Captain");
});

/*List Route*/
app.get('/app/list', (req, res) => {
    res.send("Welcome to List page");
});

/*About Route*/
app.get("/app/about", (req, res) => {
    res.send("Welcome to About Page");
});

/*Blog Page*/
app.get("/app/blog-list", (req, res) => {
    res.send("Welcome to Blog Page");
});



/*Listening Port of the App*/
app.listen(PORT, (req, res) => {
    console.log("You access the app!");
});