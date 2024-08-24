const express = require('express');
const router = express.Router();

const BlogPost=require('../models/Schema');

// GET / - Welcome message
router.get('/', (req, res) => {
    res.send('Welcome to the Blog API!');
});

// // GET /blogs - Get all blogs
// router.get('/blogs', (req, res) => {
//     res.json(blogs);
// });

// // GET /blogs/:id - Get a blog by ID
// router.get('/blogs/:id', (req, res) => {
//     const blog = blogs.find(b => b.id === parseInt(req.params.id));
//     if (!blog) return res.status(404).json({ error: 'Blog not found' });
//     res.json(blog);
// });

// // POST /blogs - Create a new blog
// router.post('/blogs', (req, res) => {
//     const { title, content, author } = req.body;
//     const newBlog = { id: idCounter++, title, content, author };
//     blogs.push(newBlog);
//     res.status(201).json(newBlog);
// });

// // DELETE /blogs/:id - Delete a blog by ID
// router.delete('/blogs/:id', (req, res) => {
//     const blogIndex = blogs.findIndex(b => b.id === parseInt(req.params.id));
//     if (blogIndex === -1) return res.status(404).json({ error: 'Blog not found' });
//     blogs.splice(blogIndex, 1);
//     res.status(204).send();
// });

// Start the server
module.exports = router;
