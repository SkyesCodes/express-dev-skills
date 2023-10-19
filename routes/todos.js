var express = require('express');
var router = express.Router();

var todosCtrl = require('../controllers/todos');
router.get('/', todosCtrl.index);
/* GET users listing. */

module.exports = router;
