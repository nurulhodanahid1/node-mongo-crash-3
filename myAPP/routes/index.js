var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers);
  next();
},
function(req, res, next) {
  return res.json({"message": "Hello, world!"});
});

router.post('/users', function(req, res, next) {
  req.body.id = 1;
  res.json(req.body);
});

module.exports = router;
