const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./Routes/routes');
const cors = require("cors");
const USERNAME = 'anjalidebnath1003';
const PASSWORD = 'blog123';
const DBNAME = 'BlogAppusingreact';

app.use(cors());

const DBURI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.kepcb.mongodb.net/${DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;

app.use(express.json());

app.listen(3090, () => {
    console.log("Server started on", 'http://localhost:3090/');
});
mongoose.connect(DBURI)
    .then(() => {
        console.log("Mongoose database is connected");
    })
    .catch((err) => {
        console.log(err.message);
    });
 
app.use('/blogs', blogRoutes);

// Serve static files from the public directory

app.get(`/`, (req, res) => {
    res.sendFile('C:/new_react_23_08/react-app/build/index.html');
});
