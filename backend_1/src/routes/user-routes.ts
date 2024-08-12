import {Router}  from "express"
import { getAllUsers, signup} from "../controllers/user-controllers.js"
import { validate , signUpValidator } from "../utils/validators.js"

const userRoutes = Router()


userRoutes.get("/",getAllUsers)
userRoutes.post("/signup",validate(signUpValidator),signup)
export default userRoutes

