const { StatusCodes } = require("http-status-codes");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json({ message: "This email is already used" });
        }

        const hashedPasswoed = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPasswoed,
        });
        return res
            .status(StatusCodes.CREATED)
            .json({ message: "Registation success", newUser });
    } catch (error) {
        console.log(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({ message: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .json({ message: "Invalid email & password" });
        }

        return res
            .status(StatusCodes.CREATED)
            .json({ message: "Login success", user });
    } catch (error) {
        console.log(error);
    }
};
