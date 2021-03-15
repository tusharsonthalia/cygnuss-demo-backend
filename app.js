/**
Server for Cygnuss.

Dependencies are mentioned in the package.json file.

This file uses the routes described in the routes folder.
**/

/* Importing the required packages */
const express = require("express");
const cors = require("cors");

/** configuring the dotenv file to access the environment variables */
require("dotenv").config();

/** Declaring the application */
const app = express();

/** Declaring the port of the application */
const port = Number(process.env.APP_PORT);

/** declaring the middleware */
app.use(cors());
app.use(express.json());

/** importing the necessary routes */
const loginRouter = require("./routes/login");

/** configuring the imported routes */
app.use("/login", loginRouter);

/** enabling the application on the configured port number */
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on PORT: ${port}.`);
    }
});
