require("dotenv").config();
const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI;
// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// const URI = "mongodb+srv://laxmidharhuzaifa2004_db_user:@6EM378le@cluster0.lvevtnb.mongodb.net/mern_admin?appName=Cluster0";

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connected with database");
    } catch {
        console.error("Connection with database is failed");
        process.exit(0);
    }
}

module.exports = connectDb;