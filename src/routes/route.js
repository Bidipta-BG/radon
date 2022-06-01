const express = require('express');
const logger = require('../logger/logger')
const helper = require('../util/helper.js')
const formatter= require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.welcome_note()

    helper.Date()
    helper.Month()
    helper.batch()

    console.log(formatter.trim)
    console.log(formatter.lCase)
    console.log(formatter.uCase)

    res.send('See the welcome note in VS code bash terminal')
});




module.exports = router;
// adding this comment for no reason