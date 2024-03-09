import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config/config.js";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be required"],
    },
    email: {
      type: String,
      required: [true, "Email must be required"],
    },
    password: {
      type: String,
      required: [true, "Password must be required"],
    },
    gender: {
      type: String,
      required: [true, "Gender must be required"],
    },
    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

//pre hook query

userSchema.pre("save", async function (next) {
  const userEmail = this?.email;
  const existingUser = await User.findOne({ email: userEmail });
  //check if user already exists
  if (existingUser) {
    throw new Error("User already exists!");
  }

  //hashedPassword
  const userPassword = this?.password;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userPassword, salt);
  this.password = hashedPassword;
  next();
});

export const User = model("User", userSchema);
