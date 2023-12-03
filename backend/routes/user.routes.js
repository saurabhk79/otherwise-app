const express = require("express");

const authenticateToken = require("../middlewares/authenticateToken.js")
const {loginUser, registerUser} = require("../controllers/user.controller.js")

const userRouter = express.Router()


// Register route
userRouter.post('/register',registerUser );

// Login route
userRouter.post('/login', loginUser);

// Protected route - Example
userRouter.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

module.exports = userRouter


