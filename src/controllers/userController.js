const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const generateOtp = require("../helpers/generateRandomToken");

// Create new user function

const createNewUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(409).json({ error: "User with email already exists" });
    }

    //  Create a new user
    // generate a new otp || verification token
    const verificationToken = generateOtp();

    //  hash the the provided password of the user
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // save the token and hash the password to the database
    let currentDate = new Date();

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      verificationTokenExpiresIn: currentDate.setHours(
        currentDate.getHours() + 1
      ),
      verificationToken,
    });

    await newUser.save();
    if (!newUser) {
      return res.status(400).json({ error: "User creation failed" });
    }

    console.log(newUser);

    //  send a verification email to the user created user

    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

//  verify user controller function
const verifyUser = async (req, res) => {
  const { verificationToken } = req.body;
  try {
    const userExistForVerification = await User.findOne({ verificationToken });

    if (!userExistForVerification) {
      return res.status(404).json({ error: "Invalid verification token" });
    }

    if (
      new Date() - userExistForVerification?.verificationTokenExpiresIn >=
      60 * 60 * 1000
    ) {
      await User.findByIdAndDelete(userExistForVerification._id.toString());

      return res.status(403).json({ error: "expired verification token" });
    }

    userExistForVerification.verificationToken = undefined;
    userExistForVerification.verificationTokenExpiresIn = undefined;
    userExistForVerification.isVerified = true;

    await userExistForVerification.save();

    return res.status(200).json({ message: "User verification successful" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

//get current user information
const getCurrentUser = async (req, res) => {
  const { userId } = req.user;
  try {
    const getCurrentUser = await User.findById(userId).select("-password");

    if (!getCurrentUser) {
      return res.status(404).json({ error: "User does not exist" });
    }
    return res
      .status(200)
      .json({ message: "User found", user: getCurrentUser });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { createNewUser, verifyUser, getCurrentUser };
