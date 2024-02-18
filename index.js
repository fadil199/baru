require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const index = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const cors = require("cors");

const { HTTP_PORT } = process.env;

index.use(express.json());
index.use(morgan("dev"));
index.use(bodyParser.urlencoded({ extended: false }));
index.use(express.urlencoded({ extended: true }));
index.use(methodOverride("_method"));
index.use(cors());
index.use(router);
index.set("view engine", "ejs");
index.use(express.json());
index.use(express.static(path.join(__dirname, "client")));

index.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: "hehehe"
    })
})

index.listen(HTTP_PORT, () => console.log("listening on port:", HTTP_PORT));
