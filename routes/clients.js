var express = require('express');
var router = express.Router();
var fakeproducts = require('esame-backend-resalvatore');

var users = [
  'pippo',
  'caio',
  'sempronio'
];

router.use (function(req, res, next){
  if (users.indexOf(req.query.api_key)!=-1){
    next();
  } else {
    res.status(401).send({Message: 'Wrong Key'})
  }
})

router.put('/:id', function(req, res) {
    res.json(orders.addorders(parseInt(req.params.id), req.body));
})

module.exports = router;
