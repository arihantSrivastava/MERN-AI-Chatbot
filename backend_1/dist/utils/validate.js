import { validationResult } from "express-validator";
// export const validate = (validations: ValidationChain[])=>{
//     console.log("yes")
//     return async (req, res , next: NextFunction)=>{
//         for (let validation of validations){
//             const result = await validation.run(req)
//             if(!result.isEmpty()){
//                 break;
//             }
//             const errors = validationResult(req)
//             if(errors.isEmpty()){
//                 return next()
//             }
//             return res.status(422).json({errors: errors.array()})
//         }
//        }
// }
// export const signUpValidator = [body("name").notEmpty().withMessage("Name is required"),
// body("email").trim().isEmail().withMessage("Enter a valid Email address"),
// body("password").trim().isLength({min:6}).withMessage("Password is required")
// ]
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
//# sourceMappingURL=validate.js.map