import { createClient } from "redis";
import mongoose from "mongoose";

const clientRedis = createClient()

const connectRedis = () => {
    console.log("Wait connecting to the RedisDatabase");

    clientRedis.connect()
        .then(() => console.log("Redis Connected"))
        .catch((error) => console.log(error))
}

const connectMongo = () => {
    console.log("Wait connecting to the MongoDatabase");

    mongoose.connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error));
};

export default { connectMongo, connectRedis };