const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');



router.get('/', async (req, res) => {
    const User  = await User.find();
    res.json({users});
});

router.post('/', async (req, res) => {
    const {user, email, password} = req.body;
    const newUser = new User({user, email, password});
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    console.log(newUser)
    res.send({user, email, password});
    
});

router.delete('/:id', async (req, res) => {
    const user = await User.findOneAndDelete(req.params.id);
    res.json('deleted');
});



router.post('/signIn', passport.authenticate('local', {
    successRedirect: 'http://192.168.0.112:3000/api/home',
    failureRedirect: 'http://192.168.0.112:3000'
}));







module.exports = router;    