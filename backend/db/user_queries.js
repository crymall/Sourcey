let db = require('./db_info.js');

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

module.exports = {
  getAllUsers,
  getSingleUser
};
