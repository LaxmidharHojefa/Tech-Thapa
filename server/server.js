require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const { home, registration } = require("./controller/auth-controller");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorMiddleware);

// auth-router
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

// server.js -> this file
app.get("/", (req, res) => {
    res.status(200).send("Home page of sserver.js");
});

app.get("/registration", (req, res) => {
    console.log(req.body);
    res.status(200).send("Registration page of server.js");
});

// controller
app.get("/controller", home);
app.post("/controller/registration", registration);

app.use(errorMiddleware); 

// server listening
const PORT = 3000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
});
