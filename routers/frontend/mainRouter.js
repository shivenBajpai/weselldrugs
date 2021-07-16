const express = require('express');
mainRouter = express.Router();

mainRouter.get('/', (req,res) => {
    res.json({success : true})
})

mainRouter.get('/disclaimer', (req,res) => {
    res.json({success : true})
})

mainRouter.get('/about', (req,res) => {
    res.json({success : true})
})

module.exports = mainRouter;