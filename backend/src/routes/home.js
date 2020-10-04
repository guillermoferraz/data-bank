const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const { isAuthenticated } = require('../helpers/auth');



router.get('/', isAuthenticated,async(req,res) =>{
    const users  = await User.findById(req.user.id);
    // res.setHeader('Access-Control-Allow-Origin','*' );
    res.json(users);
})    


    module.exports = router;