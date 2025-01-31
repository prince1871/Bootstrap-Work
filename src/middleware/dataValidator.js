const { body, validationResult } = require('express-validator');

// General validation result check middleware
const checkValidationResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

const validateUser = () => [
    body('firstName').isString().isLength({ min: 3 }).notEmpty(),
    body('lastName').isString().isLength({ min: 3 }).notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }).notEmpty(),
    body('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
        }
        return true;
    }).notEmpty(),
    checkValidationResult
];

const validateVerifyUser = () => [
    body('verificationToken').isString().isLength({ min: 6 }).notEmpty(),
    checkValidationResult
];

const validateLogin = () => [
    body('email').isEmail().notEmpty(),
    body('password').isLength({ min: 6 }).notEmpty(),
    checkValidationResult
];

module.exports = { validateUser, validateVerifyUser, validateLogin, checkValidationResult };
