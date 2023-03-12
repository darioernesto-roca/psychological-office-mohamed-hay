// Navigation for us
const express = require('express');
const router = express.Router();

router.get('/us', (req, res) => {
  res.render('us');
});

module.exports = router;

module.exports = function(req, res, next) {
  if (req.path === '/nosotros') {
      res.render('us', {
          title: 'Mohamed Hay | Nosotros'
      });
  } else {
      next();
  }
};