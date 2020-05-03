const jwt = require('njwt');

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, 'secret', (err) => {
      if (err) {
        res.send(err.message);
      } else {
        req.token = bearerToken;
        next();
      }
    });
  } else {
    throw new Error(error);
  }
}

module.exports = { verifyToken }