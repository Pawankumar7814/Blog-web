var express = require('express');
var router = express.Router();

//Route for index page
router.get('/', (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs");
});

router.get('/', (req, res) => {
    res.status(200).render("../views/mainpages/index.ejs");
});

module.exports = router;