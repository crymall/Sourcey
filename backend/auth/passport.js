const passport = require("passport")
const db = require('../db/db_info');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.one('SELECT * FROM users WHERE id = ${id}',
           {id: id})
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });
}
