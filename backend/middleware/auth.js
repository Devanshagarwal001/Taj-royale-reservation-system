const jwt = require("jsonwebtoken");
const { env } = require("../config/env");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const User = require("../models/User");

function signToken(userId) {
  return jwt.sign({ id: userId }, env.JWT_SECRET, { expiresIn: "7d" });
}

const protect = catchAsync(async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    throw new AppError("You are not logged in. Please sign in to continue.", 401);
  }

  const decoded = jwt.verify(token, env.JWT_SECRET);
  const user = await User.findById(decoded.id);

  if (!user) {
    throw new AppError("The user belonging to this token no longer exists.", 401);
  }

  req.user = user;
  next();
});

const optionalAuth = catchAsync(async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (token) {
    try {
      const decoded = jwt.verify(token, env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
    } catch {
      req.user = null;
    }
  }

  next();
});

module.exports = { signToken, protect, optionalAuth };
