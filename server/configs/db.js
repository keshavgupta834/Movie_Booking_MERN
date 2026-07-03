import mongoose from "mongoose";

const connectDB = async () => {
    try {

        if (mongoose.connection.readyState === 1) {
            return;
        }

        console.log("Connecting to MongoDB...");
        console.log(process.env.MONGODB_URI);

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Keshav1711",
        });

        console.log("Connected to MongoDB.");

    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error;
    }
}

export default connectDB;