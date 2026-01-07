const express = require("express");
const router = express.Router();
const { home, registration, login } = require("../controller/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

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

router.post("/login", login);

module.exports = router;