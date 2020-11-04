const express = require("express");
const router = express.Router();

const hello = require("./routes/hello");
const user = require("./routes/user");
<<<<<<< HEAD
const medicalTest = require("./routes/medical-test");
=======
const login = require("./routes/login");
>>>>>>> c792afd... Add initial login logic

module.exports = () => {
  hello(router);
  login(router);
  user(router);
  medicalTest(router);

  return router;
};
