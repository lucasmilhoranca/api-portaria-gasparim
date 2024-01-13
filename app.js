import express from "express";
import connectDB from "./src/database/db.js";
import cors from "cors";
import router from "./src/routes/index.js";

const app = express();

connectDB.connectRedis()
connectDB.connectMongo();

app.use(cors());
app.use(express.json());
app.use(router);

export default app