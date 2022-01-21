const express = require('express');
const { route } = require('./servicos');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;