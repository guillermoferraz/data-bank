const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const { isAuthenticated } = require('../helpers/auth');



router.get('/' ,isAuthenticated ,async ( req, res, next) => {
    const user  = await User.findById(req.user.id);
    res.setHeader('Access-Control-Allow-Origin','*' );
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    res.json(user);
    next();
});

router.post('/', async (req, res) => {
    const {user, email, password, confirm_password} = req.body;
    const newUser = new User({user, email, password});
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    console.log(newUser);
    res.send({user, email, password});
    
    
});

router.delete('/:id', async (req, res) => {
    const user = await User.findOneAndDelete(req.params.id);
    res.json('deleted');
});



router.post('/signIn', passport.authenticate('local', {
    
    successRedirect: 'http://192.168.0.112:3000/api/home',
    failureRedirect: 'http://192.168.0.112:3000/api/fail'
}));
router.get('/logOut' ,(req, res) => {
    req.logout();
    res.redirect('http://192.168.0.112:3000');
});







module.exports = router;    