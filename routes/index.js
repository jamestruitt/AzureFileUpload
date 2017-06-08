var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.debug(process.env.slotEnvironment);
  console.log(process.env.SQLCONNSTR_defaultConnection);

  res.render('index', { title: 'Slot Demo', slotEnvironment:process.env.slotEnvironment, slotSQLConnection:process.env.SQLCONNSTR_defaultConnection });

});

module.exports = router;
