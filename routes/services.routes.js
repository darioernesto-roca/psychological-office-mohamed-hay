// Navigation for services
module.exports = function(req, res, next) {
  if (req.path === '/servicios') {
      res.render('services', {
          title: 'Mohamed Hay | Servicios'
      });
  } else {
      next();
  }
};
