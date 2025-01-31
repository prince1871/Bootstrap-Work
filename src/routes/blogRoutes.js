const express = require("express");
const paginationValidator = require("../middleware/paginationValidator");

const {
  createNewBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const requireSignIn = require("../middleware/requireSignIn");

const blogRouter = express.Router();

blogRouter.post("/create", requireSignIn, createNewBlog);
blogRouter.get("/", paginationValidator, getAllBlogs);
blogRouter.get("/:blogId", getSingleBlog);
blogRouter.put("/update/:blogId", requireSignIn, updateBlog);
blogRouter.delete("/delete/:blogId", requireSignIn, deleteBlog);

module.exports = blogRouter;
