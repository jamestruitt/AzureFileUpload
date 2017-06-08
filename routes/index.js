var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', slotEnvironment:process.env.slotEnvironment, slotSQLConnection:process.env.SQLCONNSTR_defaultConnection });
});

module.exports = router;
