const express = require("express");
const userRouter = express.Router();
const {
  createNewUser,
  verifyUser,
  getCurrentUser,
} = require("../controllers/userController");
const {
  validateUser,
  validateVerifyUser,
} = require("../middleware/dataValidator");

const requireSignIn = require("../middleware/requireSignIn");

userRouter.post("/create", validateUser(), createNewUser);
userRouter.put("/verify", validateVerifyUser(), verifyUser);
userRouter.get("/me", requireSignIn, getCurrentUser);

module.exports = userRouter;
