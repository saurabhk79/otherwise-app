const jwt = require("jsonwebtoken")

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized - Missing token" });
  }

  jwt.verify(token, "your-secret-key", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden - Invalid token" });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
