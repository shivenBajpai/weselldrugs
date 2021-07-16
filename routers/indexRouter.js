const express = require("express");
const { accountRouter } = require('./frontend/accountRouter');
const { storeRouter } = require('./frontend/storeRouter');
const { mainRouter } = require('./frontend/mainRouter');
const { authRouter } = require('./frontend/authRouter');

router = express.Router();

router.use(accountRouter);
router.use(storeRouter);
router.use(mainRouter);
router.use(authRouter);

// Special Route >:D
router.get('/rickroll' ,(req, res) => {
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
})

module.exports = router;