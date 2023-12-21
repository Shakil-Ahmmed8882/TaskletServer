
const express = require("express");
require("dotenv").config();
const applyMiddleWare = require("./middleware/applyMiddleware");
const app = express();
const port = process.env.PORT || 5000;

applyMiddleWare(app);


const tasksRoutes = require("./routes/Tasks/index")
const userRoutes = require("./routes/Users")

app.use(tasksRoutes)
app.use(userRoutes)


app.use((err, req, res, next) => {
  // Check if headers are already sent
  if (res.headersSent) {
    return next(err);
  }

  // Set status and respond with error message
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV === "development" ? err.stack : {},
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




