const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const sanitizer = require("perfect-express-sanitizer");
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");

// const dataValidator = require('./middleware/dataValidator');
const authRouter = require("./routes/authRoutes");

const app = express();

// global middleware configuration for cors
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

// global middleware configuration for JSON data
app.use(express.json());

// global middleware configuration for cookie parser
app.use(cookieParser());

app.use(
  sanitizer.clean({
    xss: true,
    noSql: true,
    sql: true,
  })
);

// global middleware for routes configuration
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/blogs", blogRouter);

app.get("/", (req, res) => {
  res.send({ message: "Server is live" });
});

module.exports = app;
