const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://psalcedo:psalcedo92@cluster0-ibtpy.mongodb.net/appointmentsdatabase?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`App running on port: ${port}`));
