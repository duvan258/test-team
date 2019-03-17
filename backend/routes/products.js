var express = require('express');
var router = express.Router();
var products = require('../data/products.json');

/* GET products listing. */
router.get('/', function(req, res, next) {
  const { page, size } = req.query;
  const sizeValidated = size || 3;
  const finalProduct = ( (page || 1) * sizeValidated );
  const initialProduct = ( finalProduct - sizeValidated );
  // Return the products filtered with the params page and size
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(products.slice(initialProduct , finalProduct)));
});

module.exports = router;
