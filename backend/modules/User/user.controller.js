import { generateToken } from "../../utils/generateToken.js";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";

const userRegister = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const newUser = await User.create(userInfo);
    const accessToken = generateToken(newUser?._id);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      accessToken,
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};
const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Invalid username or password",
      });
    }
    const accessToken = generateToken(user?.id);
    res.status(200).json({
      success: true,
      message: "User login successfully",
      accessToken,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
const getAllUser = async (req, res, next) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: filteredUsers,
    });
  } catch (error) {
    next(error);
  }
};
export const userController = {
  userRegister,
  userLogin,
  getAllUser,
};
