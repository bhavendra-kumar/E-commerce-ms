const ErrorHandler = require('../untils/ErrorHandler');
const jwt = require('jsonwebtoken');
const catchAsyncErrors = require('./catchAsyncError');
const User = require('../model/User');

// Middleware to check if user is authenticated
exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    if (!req.user) {
        return next(new ErrorHandler("User not found", 404));
    }

    next();
});
