const jwt = require('jsonwebtoken');
const config = require ('config');

module.exports = function log(req, res, next){
  const token = req.header('x-auth-token');
  if(!token) return res.status(401).send('access dinid, No token provided');

  try{
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    next();
  }catch(err){
    res.status(401).send('invalid token');
  }
}