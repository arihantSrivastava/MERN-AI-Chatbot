import User from "../models/user.js";
import { hash } from "bcrypt";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "All users", users });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "error", cause: error.message });
    }
};
export const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        console.log(user._id);
        return res.status(200).json({ message: "User Created", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "error", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map