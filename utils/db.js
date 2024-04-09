import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectToDatabase = async () => {
    try {
        console.log("Connecting to the database", process.env.MONGODB_URI);
        const instance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("Connected to the database" + instance.connection.host);
    } catch (error) {
        console.log("Error connecting to the database", error);
        throw new Error("Error connecting to the database", error);
    }
};

export default connectToDatabase;