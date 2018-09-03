let db = require('./db_info.js');

const getAllModules = (req, res, next) => {
  db.any('SELECT * FROM modules LIMIT 20')
    .then((modules) => {
      
    })
}
