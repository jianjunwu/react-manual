// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
// import Product from "./models/product.model.js";

import router from "./routes/product.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to parse json
app.use(cors());

app.use("/api/products", router);



app.listen(PORT, () =>{
    connectDB();
    console.log('Server started at http://localhost:' + PORT)
});
