const cors = require("cors");
const cookieParser = require('cookie-parser');
const express = require('express');
const {LOCAL_CLIENT,CLIENT} = require("../config/default")
const applyMiddleWare = (app) => {
  app.use(
    cors({
      origin: {
            LOCAL_CLIENT,
            CLIENT
      },
      Credentials: true,
    })
  );

  app.use(express.json())
  app.use(cookieParser())
};


module.exports = applyMiddleWare
