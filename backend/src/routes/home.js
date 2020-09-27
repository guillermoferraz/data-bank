const { Router } = require('express');
const router = Router();

const { getHome } = require('../controllers/home.controllers');

router.route('/')
    .get(getHome);


    module.exports = router;