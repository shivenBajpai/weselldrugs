const express = require('express');
storeRouter = express.Router();

storeRouter.get('/search',(req,res) => {
    res.json({success : true})
})

storeRouter.get('/store',(req,res) => {
    res.json({success : true})
})

storeRouter.get('/item',(req,res) => {
    res.json({success : true})
})

module.exports = storeRouter;