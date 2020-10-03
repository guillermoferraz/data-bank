const homeCtrl = {};
const { isAuthenticated } = require('../helpers/auth');

const User = require('../models/User');

homeCtrl.getHome =  isAuthenticated ,async (req, res) => {
    const users  = await User.find(req.params.id);
    res.json({users});
};

module.exports = homeCtrl;