const withAuth = (req, res, next) => {
    of (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }  
};

module.exports = withAuth;