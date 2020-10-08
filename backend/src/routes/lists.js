const { Router } = require('express');
const router = Router();
const List = require('../models/Lists');
const {isAuthenticated } = require('../helpers/auth');


router.post('/', isAuthenticated, async (req, res) => {
    const {objectPrimary, section, info} = req.body;
    const newList = new List({objectPrimary, section, info});
    newList.user = req.user.id;
    await newList.save();
    console.log(newList);
    res.send({objectPrimary ,section, info});
})
router.get('/', isAuthenticated, async (req, res) => {
    const lists = await List.find({user: req.user.id}).sort({date: 'desc'});
    res.send(lists);
})
router.get('/:id', isAuthenticated, async (req, res) => {
    const list = await List.findById(req.params.id);
    res.json(list);
})
router.put('/:id', isAuthenticated, async (req, res) => {
    // const oneNote = await Note.findById(req.params.id);
    // res.send(oneNote);
    const {objectPrimary, section, info } = req.body;
    await List.findByIdAndUpdate(req.params.id, {
        objectPrimary ,section, info
    });
    res.json('List updated')
})
router.delete('/:id', async(req, res) =>{
    await List.findByIdAndRemove(req.params.id);
    
})

module.exports = router;