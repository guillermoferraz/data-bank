const { Router } = require('express');
const router = Router();
const Avatar = require('../models/Avatar')
const {isAuthenticated } = require('../helpers/auth');


router.post('/', isAuthenticated, async(req, res) => {
    const image = new Avatar();
    image.filename = req.body.filename;
    image.path = '/img/uploadAvatar/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;
    image.user = req.user.id;

    await image.save();
    console.log(image);
    res.redirect('http://192.168.0.112:3000/api/home');
});

router.get('/', isAuthenticated, async (req, res) => {
    const avatar = await Avatar.find({user: req.user.id}).sort({created_at: 'desc'});
    
    res.send(avatar);
    
})
router.delete('/:id', async(req, res) =>{
    await Avatar.findByIdAndRemove(req.params.id);
})



module.exports = router;