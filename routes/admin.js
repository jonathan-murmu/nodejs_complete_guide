const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next)=> {
    console.log('in middleware 1');
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add</button></form>')
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;