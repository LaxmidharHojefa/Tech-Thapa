const express = require("express");
const router = express.Router();
const { home, registration, login, getAllUsers } = require("../controller/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

// auth routers
router.get("/", (req, res) => {
    res.status(200).send("Home page of auth-router");
});

router.route("/registration").get((req, res) => {
    res.status(200).send("Registration page of auth-router");
});


// controller

router.get("/controller", home);
// router.route("/controller").get(home);

router.get("/controller/registration", validate(signupSchema), registration)

router.get("/", home);
router.post("/registration", validate(signupSchema), registration);
router.post("/login", validate(loginSchema), login);
router.get("/users", getAllUsers);

module.exports = router;



