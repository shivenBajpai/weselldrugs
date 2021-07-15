const express = require('express');
accountRouter = express.Router();

accountRouter.get('/order', (req,res) => {
    res.json({success : true})
})

accountRouter.get('/cart', (req,res) => {
    res.json({success : true})
})

accountRouter.get('/account', (req,res) => {
    res.json({success : true})
}) 

module.exports = accountRouter;