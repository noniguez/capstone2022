import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

//ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


// Worked for me in class, did not work for capstone :(
// solved it by installing MongoDB for VS Code, then connecting 
// to my cluster
// const app = express();
// // const PORT = 3000;

// app.use(express.json());
// app.use(cors());
// app.use("/posts", postsRouter);

// app.use((error, req, res, next) => {
  // console.error(error.stack);
  // res.status(500).json({ message: error.message });
// });

// const connectDb = () => {
  // try {
    // mongoose.connect(process.env.DB_URI);
    // console.log("Database connected");
  // } catch (error) {
   //  console.error(error);
  // }
// };

// app.listen(PORT, () => {
 //  console.log(`Listening on port: ${PORT}`);
 //  connectDb();
// });