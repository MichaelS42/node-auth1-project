
const jwt = require("jsonwebtoken");
const { jwtSecret } = require(".../config/secrets.js")


module.exports = (req, res, next) => {
  res.status(401).json({ you: 'shall not pass!' });
};