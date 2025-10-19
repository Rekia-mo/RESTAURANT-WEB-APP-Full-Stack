module.exports = function admin(req, res, next) {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).send('Access denied. Admins only.');
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong.');
  }
};
