import { generateToken } from "../../utils/generateToken.js";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";

const userRegister = async (req, res) => {
  try {
    const userInfo = req.body;
    const newUser = await User.create(userInfo);
    const {password,...rest} = newUser;
    const accessToken = generateToken(newUser?._id);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      accessToken,
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
const userLogin = async (req, res) => {
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
    const {password:userPassword,...rest} = user;
    res.status(200).json({
      success: true,
      message: "User login successfully",
      accessToken,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};
const getAllUser = async (req, res) => {
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
    res.status(400).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
export const userController = {
  userRegister,
  userLogin,
  getAllUser,
};
