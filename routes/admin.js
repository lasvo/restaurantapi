var express = require('express');
var router = express.Router();
var orders = require('esame-backend-resalvatore');

router.use(function (req, res, next) {
  if (req.query.api_key == 'admin'){
    next();
  } else {
    res.status(401).send('Wrong Key')
  }
})

router.get('/orders', function(req, res) {
    res.json(orders.allorders());
})

router.delete('/:id', function(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
      return res.status(400).json({message:"id must be a integer"})
    }
    var order = orders.getById(parseInt(req.params.id));
    if (order === null) {
      return res.status(404).json({message: "order not found"});
    }
    res.json(orders.delete(parseInt(req.params.id)));
})
router.post('/:id', function(req, res) {
    res.json(orders.setOrderReady(req.body));
})
router.post('/:id', function(req, res) {
    res.json(orders.setOrderClosed(req.body));
})
module.exports = router;
