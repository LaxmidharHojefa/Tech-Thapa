const User = require("../models/user-model");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");

app.use(express.json());

const home = async (req, res) => {
    try {
        res.status(200).send({ 
            msg: "Welcome to Auth API",
            message: "Home page of auth-controller"});
    }
    catch(error) {
        console.error("Error in home controller: ", error);
        next(error);
    }
};

const registration = async (req, res, next) => {
    try {
        console.log("📥 Registration request received with body:", req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if(userExist) {
            console.log("⚠️ User already exists:", email);
            return res.status(400).send({ msg: "User already exist" });
        }

        console.log("🔄 Creating user in database...");
        const userCreated = await User.create({ 
            username, 
            email, 
            phone, 
            password 
        });
        
        console.log("✅ User created successfully:", userCreated._id);

        res.status(201).send({ 
            msg: userCreated, 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString()
        });
    }
    catch(error) {
        console.error("❌ Error in registration: ", error);
        next(error);
    }
};

const login = async (req, res, next) => {
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
        console.error("Error in login: ", error);
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        console.log("📊 Fetching all users from Mongoose...");
        const allUsers = await User.find({});
        console.log("✅ Found", allUsers.length, "users");
        console.log("DB Connection:", { 
            db: mongoose.connection.name, 
            host: mongoose.connection.host, 
            port: mongoose.connection.port,
            readyState: mongoose.connection.readyState 
        });
        res.status(200).json({ count: allUsers.length, users: allUsers });
    } catch(error) {
        console.error("❌ Error fetching users: ", error);
        next(error);
    }
};

module.exports = { home, registration, login, getAllUsers };



