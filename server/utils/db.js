require("dotenv").config();
const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI;
// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// const URI = "mongodb+srv://laxmidharhuzaifa2004_db_user:@6EM378le@cluster0.lvevtnb.mongodb.net/mern_admin?appName=Cluster0";

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        const { host, port, name } = mongoose.connection;
        console.log("✅ connected with database", { uri: URI, host, port, dbName: name, readyState: mongoose.connection.readyState });
    } catch (error) {
        console.error("Connection with database is failed", error);
        process.exit(1);
    }
}

module.exports = connectDb;