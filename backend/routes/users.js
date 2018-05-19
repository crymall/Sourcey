var express = require('express');
var router = express.Router();
const db = require('../db/user_queries');
const passport = require('../auth/local');
const { loginRequired } = require("../auth/helpers");

/* GET users listing. */
router.get('/', loginRequired, db.getAllUsers);
router.get('/:user_id', loginRequired, db.getSingleUser);
router.post('/new', db.createUser);
router.post('/login', passport.authenticate("local", {}), db.loginUser);
router.post('/logout', loginRequired, db.logoutUser);

module.exports = router;
