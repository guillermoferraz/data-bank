const { Router } = require('express');
const router = Router();
const Note = require('../models/Notes');

const {isAuthenticated } = require('../helpers/auth');


router.post('/', isAuthenticated, async (req, res) => {
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    newNote.user = req.user.id;
    await newNote.save();
    console.log(newNote);
    res.send({title ,description});
})
router.get('/', isAuthenticated, async (req, res) => {
    
    const notes = await Note.find({user: req.user.id}).sort({date: 'desc'});
    res.send(notes);
})
router.get('/:id', isAuthenticated, async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
})
router.put('/:id', isAuthenticated, async (req, res) => {
    // const oneNote = await Note.findById(req.params.id);
    // res.send(oneNote);
    const {title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title ,description
    });
    res.json('Note updated')
})
router.delete('/:id', async(req, res) =>{
    await Note.findByIdAndRemove(req.params.id);
})

module.exports = router;