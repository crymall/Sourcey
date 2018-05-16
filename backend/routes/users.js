var express = require('express');
var router = express.Router();
const db = require('../db/user_queries');

/* GET users listing. */
router.get('/', db.getAllUsers);
router.get('/:user_id', db.getSingleUser);

module.exports = router;
