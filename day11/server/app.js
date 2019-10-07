import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const PORT = 3000;

const app = express();
app.use(bodyParser);
app.use("/api/book", bookRouter);


app.listen(PORT, function () {
    console.log(`Server is listening on ${PORT}`);
})