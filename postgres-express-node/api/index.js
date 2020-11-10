const express = require("express");
const router = express.Router();

const hello = require("./routes/hello");
const user = require("./routes/user");
<<<<<<< HEAD
<<<<<<< HEAD
const medicalTest = require("./routes/medical-test");
=======
const login = require("./routes/login");
>>>>>>> c792afd... Add initial login logic
=======
const login = require("./routes/login");
>>>>>>> c792afdc999fe038f541dbcf3929e1b67b5bc16f

module.exports = () => {
  hello(router);
  login(router);
  user(router);
  medicalTest(router);

  return router;
};
