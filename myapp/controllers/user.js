
exports.show_login = function(req, res, next) {
    res.render('user/login', {formDate: {}, errors: {} });
}

exports.show_signup = function(req, res, next){
    res.render('user/signup', { formData: {}, errors: {}})
}