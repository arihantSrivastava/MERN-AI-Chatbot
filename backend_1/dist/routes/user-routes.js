import { Router } from "express";
import { getAllUsers, login, signup } from "../controllers/user-controllers.js";
import { validate, signUpValidator, loginValidator } from "../utils/validators.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signUpValidator), signup);
userRoutes.post("/login", validate(loginValidator), login);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map