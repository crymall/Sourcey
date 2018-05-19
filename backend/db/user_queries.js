let db = require('./db_info.js');
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then((data) => {
      res.status(200)
         .json({
           message: 'fetched all users',
           data: data
         });
    })
    .catch((err) => {
      return next(err);
    });
}

const getSingleUser = (req, res, next) => {
  db.one('SELECT * FROM users WHERE id = ${user_id}', req.params)
    .then((data) => {
      res.status(200)
         .json({
           message: 'fetched single user',
           data: data
         })
    })
    .catch((err) => {
      return next(err);
    })
}

const createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);

  db.none('INSERT INTO users (username, password_digest) VALUES (${username}, ${password})', {username: req.body.username, password: hash})
    .then(() => {
      passport.authenticate("local", {})
    })
    .then(() => {
      res.status(200)
         .json({
           user: {username: req.body.username},
           message: "Registration successful."
         })
    })
    .catch((err) => {
      res.status(500)
         .json({
           message: err.message
         })
    })
}

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
}

const loginUser = (req, res) => {
  res.json({
    user: req.user,
    message: "Login Success"
  });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  logoutUser,
  loginUser
};
