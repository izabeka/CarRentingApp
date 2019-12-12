module.exports = function (req, res, next) {
    if (!req.userLogin.isAdmin) return res.status(403).send('Forbidden! You are not an admin!');
    next();
}