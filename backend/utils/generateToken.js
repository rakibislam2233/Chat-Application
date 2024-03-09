import jwt from "jsonwebtoken";
import config from "../config/config.js";
export const generateToken = (userId,res) => {
  const token = jwt.sign({ userId }, config.jwt_token, {
    expiresIn: "15d",
  });

  return token;
};