const winston = require("winston");
const UserService = require("./user.service");
<<<<<<< HEAD
const MedicalTestService = require("./medical-test.service");
const { User, MedicalTest } = require("../models");
=======
const LoginService = require("./login.service");
const { User } = require("../models");
>>>>>>> c792afdc999fe038f541dbcf3929e1b67b5bc16f

const logger = winston.loggers.get("logger");

exports.userServiceInstance = new UserService({ logger, userModel: User });
<<<<<<< HEAD
exports.medicalTestServiceInstance = new MedicalTestService({
  logger,
  testModel: MedicalTest,
});

=======
exports.loginServiceInstance = new LoginService({ logger, userModel: User });
>>>>>>> c792afdc999fe038f541dbcf3929e1b67b5bc16f
