import express from "express";
import connectDb from "./config/dbConnect.js";
import routes from "./routes/index.js"

const connection = await connectDb();

connection.on("error", (err) => {
    console.error("connection error", err);
});

connection.once("open", () => {});

const app = express();
routes(app);

export default app;