import { body } from "express-validator";

export const loginValidation = [
    body('email','Email is invalid').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({min:5}),
]

export const registerValidation = [
    body("email", "Email is invalid").isEmail(),
    body("password", "Password must be at least 6 characters").isLength({ min: 6 }),
    body("name", "Name must be at least 4 characters").isLength({ min: 4 }),
    body("avatarUrl").optional().isURL()
    ]