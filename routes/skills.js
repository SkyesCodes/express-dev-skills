var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');
router.get('/', skillsCtrl.index);
/* GET users listing. */

module.exports = router;
