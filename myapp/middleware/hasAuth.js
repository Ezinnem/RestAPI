let createError = require('http-errors');

exports.isLoggedIn = function(req, res, next) {
    if (req.user)
       next()
    else
       next(createError(404, 'Please login to acess this page'))
}

exports.hasAuth = function(req, res, next) {
   if (req.user && req.user.isAdmin == true)
      next();
   else
      next(createError(404, 'Only Admin Users can access this page.'))
}