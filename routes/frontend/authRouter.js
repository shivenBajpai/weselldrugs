const express = require('express');
authRouter = express.Router();

authRouter.get('/login', (req,res) => {
    res.json({success : true})
})

authRouter.get('/register', (req,res) => {
    res.json({success : true})
})

module.exports = authRouter;