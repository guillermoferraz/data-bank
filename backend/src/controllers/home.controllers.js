const homeCtrl = {};

const User = require('../models/User');

homeCtrl.getHome = async (req, res) => {
    const users  = await User.find();
    res.json({users});
};

module.exports = homeCtrl;