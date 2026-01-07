const User = require("../models/user-model");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");

app.use(express.json());

const home = async (req, res) => {
    try {
        res.status(200).send("Home page of auth-controller");
    }
    catch(error) {
        console.error("Error in home controller: ", error);
        res.status(500).send("Internal server error");
        next(error);
    }
};

const registration = async (req, res) => {
    try {
        // res.status(200).send("Registration page of auth-controller");
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if(userExist) {
            return res.status(400).send({ msg: "User already exist" });
        }

        // hash the password
        // 1st and easy method
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ 
            username, 
            email, 
            phone, 
            password 
        });

        res.status(201).send({ 
            // msg: "User registered successfully",
            msg: userCreated, 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString()
        });
    }
    catch(error) {
        console.error("Error in home controller: ", error);
        res.status(400).send({ msg: "Internal server error" });
        next(error);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const userExist = await User.findOne({ email });

        if(!userExist) {
            return res.status(400).send({ msg: "Invalid credentials"});
        }

        // const isPasswordMatch = await bcrypt.compare(password, userExist.password);
        const isPasswordMatch = await userExist.comparePassword(password);

        if(isPasswordMatch) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
        } else {
            res.status(401).json({ msg: "Invalid Email or Password" });
        }
    }
    catch(error) {
        console.error("Error in home controller: ", error);
        res.status(400).send({ msg: "Internal server error" });
        next(error);
    }
};

module.exports = { home, registration, login };

