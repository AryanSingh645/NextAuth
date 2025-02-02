import mongoose from "mongoose";

export async function Connect () {
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection;
    
        connection.on('connected' , () => {
            console.log("MongoDB Connected Successfully")
        })
    
        connection.on('error', (err) => {
            console.log("MongoDB connection error, please make sure db is up and running: " + err);
            process.exit();
        })
    } catch (error) {
        console.log("Something went wrong connecting to db: " + error);
    }
}