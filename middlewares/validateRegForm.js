const { body } = require("express-validator");

const validateRegForm = [
    body("first_name")
    .notEmpty().withMessage("* Debes completar este campo"),
    body("last_name")
    .notEmpty().withMessage("* Debes completar este campo"),
    body("email")
    .isEmail().withMessage("* Debes completar el Email con una dirección válida"),
    body("password")
      .notEmpty().withMessage(" Debes completar la contraseña").bail()
      .isLength({ min: 4, max: 8 }).withMessage("* La contraseña debe tener entre 4 y 8 caracteres")    
  ];

  module.exports = validateRegForm;