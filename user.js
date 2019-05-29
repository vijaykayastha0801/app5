const express = require('express');

const router = express.Router();

router.post('/user/login', (request, response) => {
    response.send('login success');
});

module.exports = router;