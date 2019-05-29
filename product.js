const express = require('express');

const router = express.Router();

router.post('/product', (request, response) => {
    response.send('product created');
});

router.get('/product', (request, response) => {
    response.send('list of products');
});

module.exports = router;