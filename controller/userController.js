//const jwt = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
async function signin(req, res) {
  const user = {
    id: 1,
    username: 'user',
    email: 'user@gmail.com',
  };
  jwt.sign({ user }, 'secret', { expiresIn: '1200s' }, (err, token) => {
    res.json({
      token,
    });
  });
}

module.exports = {
  signin,
};
