import mongoose from "mongoose";
import express from "express";
import router from "./routes/router.js";
import morgan from "morgan";
import cors from "cors";


const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/DentalClinic")

app.use(cors({ origin: 'http://localhost:4000' }));
app.use(express.json());
app.use(morgan('dev'));
app.use("/api",router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});