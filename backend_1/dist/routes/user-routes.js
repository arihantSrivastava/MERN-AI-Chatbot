import { Router } from "express";
import { getAllUsers, signup } from "../controllers/user-controllers.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", signup);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map