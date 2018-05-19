const db = require('../db/db_info');
const bcrypt = require("bcryptjs");

function comparePass(userPass, databasePass) {
  return bcrypt.compareSync(userPass, databasePass);
}

function createHash(password) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function loginRequired(req, res, next) {
  if (!req.user) {
    res.status(401)
       .json({message: "Forbidden - please log in."});
    return;
  }
  next();
}

module.exports = {
  comparePass,
  createHash,
  loginRequired
};
