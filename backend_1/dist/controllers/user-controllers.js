import User from "../models/user.js";
import { hash, compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(201).json({ message: "All users", users });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "error", cause: error.message });
    }
};
export const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(401).send("User already exists");
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.clearCookie(COOKIE_NAME, { path: "/", domain: "localhost", httpOnly: true, signed: true });
        const token = createToken(user.id.toString(), email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires, httpOnly: true, signed: true });
        console.log(user._id);
        return res.status(200).json({ message: "User Created", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "error from signup controller", cause: error.message });
    }
};
export const login = async (req, res, next) => {
    try {
        console.log("work");
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(user);
        if (!user)
            return res.status(401).send("User not Registered");
        const isCorrectPassword = await compare(password, user.password);
        if (!isCorrectPassword)
            return res.status(403).send("Incorrect Password");
        res.clearCookie(COOKIE_NAME, { path: "/", domain: "localhost", httpOnly: true, signed: true });
        const token = createToken(user.id.toString(), email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(COOKIE_NAME, token, { path: "/", domain: "localhost", expires, httpOnly: true, signed: true });
        return res.status(201).json({ message: "U are logged in" });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "error i login", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map