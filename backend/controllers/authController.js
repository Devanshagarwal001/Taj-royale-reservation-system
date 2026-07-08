const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const { signToken } = require("../middleware/auth");

const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

function sendAuthResponse(res, user, statusCode = 200) {
  const token = signToken(user._id);

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      token,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
}

exports.register = catchAsync(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new AppError("Please provide name, email, and password", 400);
  }

  if (password.length < 8) {
    throw new AppError("Password must be at least 8 characters", 400);
  }

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) {
    throw new AppError("An account with this email already exists", 409);
  }

  const user = await User.create({ name, email, password });
  sendAuthResponse(res, user, 201);
});

exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError("Please provide email and password", 400);
  }

  const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError("Incorrect email or password", 401);
  }

  sendAuthResponse(res, user);
});

exports.logout = catchAsync(async (req, res) => {
  res
    .status(200)
    .clearCookie("token")
    .json({ success: true, message: "Logged out successfully" });
});

exports.getMe = catchAsync(async (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    },
  });
});
exports.googleLogin = catchAsync(async (req, res) => {
  const { credential } = req.body;

  if (!credential) {
    throw new AppError("Google credential is required", 400);
  }

  // Verify Google ID Token
  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  const email = payload.email.toLowerCase();

  let user = await User.findOne({ email });

  // Create user if it doesn't exist
  if (!user) {
    user = await User.create({
      name: payload.name,
      email: email,
      password: Math.random().toString(36).slice(-12),
    });
  }

  // Send your normal JWT
  sendAuthResponse(res, user);
});