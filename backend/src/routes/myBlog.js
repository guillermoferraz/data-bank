const { Router } = require('express');
const router = Router();
const Blog = require('../models/MyBlog');

const {isAuthenticated } = require('../helpers/auth');


router.post('/', isAuthenticated, async (req, res) => {
    const {title, article} = req.body;
    const newBlog = new Blog({title, article});
    newBlog.user = req.user.id;
    await newBlog.save();
    console.log(newBlog);
    res.send({title ,article});
})
router.get('/', isAuthenticated, async (req, res) => {
    
    const blogs = await Blog.find({user: req.user.id}).sort({date: 'desc'});
    res.send(blogs);
})
router.get('/:id', isAuthenticated, async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
})
router.put('/:id', isAuthenticated, async (req, res) => {
    // const oneNote = await Note.findById(req.params.id);
    // res.send(oneNote);
    const {title, article } = req.body;
    await Blog.findByIdAndUpdate(req.params.id, {
        title ,article
    });
    res.json('Blog updated')
})
router.delete('/:id', async(req, res) =>{
    await Blog.findByIdAndRemove(req.params.id);
})

module.exports = router;