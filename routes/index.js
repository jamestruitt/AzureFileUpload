var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    console.log('***************************************************');
    console.log('Current Time:      ' + currentTime:new Date().getTime() / 1000 })
    console.log('Environment:       ' + process.env.slotEnvironment);
    console.log('DB Connect String: ' + process.env.SQLCONNSTR_defaultConnection);
    console.log('***************************************************');

  res.render('index', { title: 'Slot Demo', slotEnvironment:process.env.slotEnvironment, slotSQLConnection:process.env.SQLCONNSTR_defaultConnection, currentTime:new Date().getTime() / 1000 });

});

module.exports = router;
