import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            await validation.run(req);
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
export const loginValidator = [
    body("email").trim().isEmail().withMessage("Enter a valid Email address"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password is required")
];
export const signUpValidator = [body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator
];
//# sourceMappingURL=validators.js.map