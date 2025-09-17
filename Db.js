
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectDb = () => {
    try {
        mongoose.connect(process.env.MONGO)
        console.log("Db is Connected");
    }
    catch (err) {
        console.error("Db not connected", err.message);
        process.exit(1)
    }
}
export default connectDb
