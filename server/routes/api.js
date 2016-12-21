var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

/* GET users listing. */
router.get('/cereals', function(req, res, next) {
  knex('cereals')
  .join('rankings', 'cereal_id', 'cereals.id')
  .then(function(results) {
    res.json(results);
  })
});

module.exports = router;
